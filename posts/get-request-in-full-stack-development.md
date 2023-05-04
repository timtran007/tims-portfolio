---
title: "It's a Read Action, Not a GET Request in Full Stack Development"
date: '2022-12-16'
---

Object Oriented programming in Ruby has been the toughest section to grasp so far in my journey of learning how to code, but it has been one of the most rewarding.

Since the last time I have written ([Client-Side Routing w/ React Router](https://dev.to/timtran007/a-marketers-take-on-client-side-routing-with-react-router-4n1b)), it has been a full-circle experience with dabbling in full stack development. Since my journey since September of 2022, I have been developing my skills to build both front end applications and back end applications while leveraging React as the front end library and Sinatra and Active Record as my back end API application.

Throughout this journey, I picked up a magical tip that shows the true power of the back end development, when performing a GET request with a React app.

You can follow along by cloning my Phase 3 Project: Dog Adventures ->
[Front End React App](https://github.com/timtran007/phase-3-project-dog-adventures-client)
[Back End API Server](https://github.com/timtran007/phase-3-project-dog-adventures-app-server)

So let's jump into it as I break down how to write CRUD actions in your controllers file with Sinatra.

## What does the 'R' stand for in CRUD?

Before we go answering the question of this header... Let's take a moment to define what CRUD actions are and their corresponding HTTP verbs. 

CREATE = "POST"
? = "GET"
Update = "PATCH"
Destroy = "DELETE"

Yes you guessed it! R is Read within CRUD actions and the corresponding HTTP verb is GET. 

Let's talk about the differences between the actual CRUD action of 'READ' and the 'GET' HTTP verb and how to use it in correspondence with regards to full stack development.

## The GET Fetch Request

The GET fetch request is utilized in both the front end and the back end. 

As far as a React application goes the general setup is basically leveraging the useEffect() prop from React:

```
// App.js

const [dogs, setDogs] = useState([])

useEffect(() => {
  fetch('http://localhost:9292/dogs')
  .then(resp => resp.json())
  .then(data => setDogs(data))
}, [])
```

In the code above, we are essentially creating a GET fetch request that pulls information from our Back End API Server to set the state of dogs as an array information from the dogs table.

This is pretty basic enough! So let's go ahead and take a look at our application_controller.rb file in the back end application to see how GET fetch request is mapped out. 

```ruby
#application_controller.rb

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/dogs' do
    dogs = Dog.all
    dogs.to_json
  end
end
```
Again, this isn't crazy stuff here, it's pretty basic to where you are mapping the action of the front end's GET request to pull all dogs into state.

Below is what we get when we open up http://localhost:9292/dogs in our browser:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/whtc6009dzw0tt69kjcy.png)

We get a basic JSON file that give us information about dogs in our database that we can use in our Front End application. 

## The Difference Between Read and GET

The concept of Read is reading our entire back end application that includes our associations. 

Within our back end, we have two models -> 

Dog
&
Adventure

Each dog has many adventures and each adventure belongs to a dog.

With this in mind, if we were to GET information we could create the same mapped out action for our adventures... But if we scaled and had a big application with a lot of data, running the GET fetch request through our front end multiple times could be costly.

So if we want to Read from both models and run GET once in our Front End and save everything else to state to have access, then how would we do this?

## Relationship Associations

Let's take a look at our mapped out GET request for /dogs

```ruby
#application_controller.rb

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/dogs' do
    dogs = Dog.all
    dogs.to_json
  end
end
```

As you see the .to_json method allows us to use a power feature: ``include:`` which will nest a ``has_many`` relationship into the hash.

i.e. if we had:

```
get '/dogs' do
    dogs = Dog.all
    dogs.to_json(include: :adventures)
  end
```

Then we have access to an array of hashes with all of our dogs and their corresponding adventures nested in their hash.

Let's take a look now at our API:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oiiwp37lcwm44vb5mkca.png)

As you can see, our front end can now have access to all this rich data based on just 1 GET fetch request.

## TLDR;

Don't run multiple GET fetch requests in your front end.

Access the power of your back end API by simply associating models in your controllers.

```
get '/object_tables' do
  objects = Object.all
  objects.to_json(include: :second_tables)
end
```
