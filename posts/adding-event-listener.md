---
title: 'Adding an Event Listener to DOM Manipulated Data Fetch(ed) from a JSON API'
date: '2022-10-15'
---

## TL;DR:
As a person who has been learning JavaScript for the last 3-4 weeks, here is my take on adding an event listener to a newly created elements through DOM Manipulation from a JSON API fetch:

```
let databaseURL = '_**url of your json data file**_'
let areaInHTMLToAppend = document.querySelector('_**id or class of areaInHTMLToAppend**_')

function fetchData(){
 fetch(databaseURL)
 .then(resp => resp.json())
 .then(data => {
  appendData(data)
  addingEventListener()
 })
}

function appendData(array){
 array.forEach(data => {
  let fetchedData = document.createElement('div')
  fetchedData.className = 'fetched-data-class'
  fetchedData.innerHTML =`
   _**//HTML manipulation**_
  `
 areaInHTMLToAppend.appendChild(fetchedData)
 })
}

function addingEventListener(){
const newlyCreatedElements = document.querySelectorAll('.fetched-data-class')
newlyCreatedElements.forEach(element => {
 element.addEventListener('**_eventListener_**', _**callback**_)
})
}

function callback() => {
 **_console.log('x')_**
}

fetchData()

```

## Introduction

It was 9:27 PM and I had just gotten done with a zoom session with a technical coach explaining the basis of my code and how I was going to fetch data from the API and manipulate the DOM with this new set of data to assign it.

It was exhilarating! I rushed over to my spouse and told her that I am finally getting it. 3 weeks in and coding is pretty  easy once everything clicks. 

I thought to myself, I must be a genius let me take a couple of hours and unwind and pick this up again. 

But little did I know at the time my thoughts and plan came back to haunt me...

It was now 2:13 AM and I am banging my head against the computer asking why my code isn't working. I totally thought I had the data manipulation correct, but I was missing a crucial piece.


## My crucial mistake
I kept getting a TypeError that array.forEach() is not a function... 

What did I do wrong? What can I do? My notes that I was taking didn't have this TypeError... I didn't know what to Google and I am taking my array and iterating on it, so why isn't it working!?!? I reached out to the Flatiron School community on slack and it was a humbling experience. 

The next day, I learned that I was not accessing my array correctly.

Some wise words of advice if you get TypeError array.forEach() is not a function:

CHECK YOUR ARRAY/OBJECT/DATA you are trying to iterate on...

Are you accessing the right information with dot notation? Are you just pulling in the database as a whole?

## console.log() is your friend

In order to answer the pivotal question above, use a console.log


```
function fetchOngoingRecall(){
    fetch ('https://api.fda.gov/food/enforcement.json?limit=1000')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
}

```

Now you can see where the array/object of the data really lies. 

In my example, the data retrieved from the .json() method had the arrays in the results. 


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n7alklt0q2kipinr0pk2.png)

So how do you access the array?

# You Can Use Dot Notation

Do this to iterate on the example above:

```
function fetchOngoingRecall(){
    fetch ('https://api.fda.gov/food/enforcement.json?limit=1000')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.results.forEach(product =>{
            console.log(product)
        })
    })
}
```
This way you can access the array and manipulate the right data.

## Why We Are Really Here

Now let's talk about adding adding an event listener to a DOM Manipulated element that was fetch(ed) from the JSON API.

Below is some code that manipulates the data to add into the DOM:

```
let databaseURL = '_**url of your json data file**_'
let areaInHTMLToAppend = document.querySelector('_**id or class of areaInHTMLToAppend**_')

function fetchData(){
 fetch(databaseURL)
 .then(resp => resp.json())
 .then(data => {
  appendData(data)
 })
}

function appendData(array){
 array.forEach(data => {
  let fetchedData = document.createElement('div')
  fetchedData.className = 'fetched-data-class'
  fetchedData.innerHTML =`
   _**//HTML manipulation**_
  `
 areaInHTMLToAppend.appendChild(fetchedData)
 })
}
```

In the code above we have created a div for each fetchedData, assigned it the .fetch-data-class and we appended each fetchedData into our designated area to append with the areaInHTMLToAppend variable.

_Please note the className assignment is important as we will use it for adding our event listener._

## Adding Our Event Listener

Easy steps to add an event listener... 

Let's begin by creating a variable that selects all of our new  divs with the class name of .fetched-data-class.

```
function addingEventListener(){
  const newlyCreatedElements = 
  document.querySelectorAll('.fetched-data-class')
}
```

It would be very tempting to just add the .addEventListener method to the newly created elements.

If we do we are going to get hit with another TypeError that newlyCreatedElements.addEventListener() is not a function...

Let's go back to my crucial mistake from before. 

You cannot just add an event listener to a nodeList or an array-like object, you would have to iterate on it. 

**_So here is the solution:_**

```
function addingEventListener(){
  const newlyCreatedElements = 
  document.querySelectorAll('.fetched-data-class')
  newlyCreatedElements.forEach(element => {
    element.addEventListener('**_eventListener_**', _**callback**_)
  })
}
```

We must use forEach to go through the nodeList and add the event listener to each element and you can listen for any events and create a callback function that you would like.

## In Conclusion

I hope this post can help you on your coding journey. 

If you are learning on your own, the best advice I can give you is try building a community of people to help you through this journey. 

For me, joining Flatiron School's bootcamp helped me to realize that it is great to have a community to learn and go through this journey in becoming a software developer, plus I can get expert guidance and advice from instructors and technical coaches when I'm really stuck!