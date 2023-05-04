---
title: "A Marketer's Take on Client-Side Routing with React Router"
date: '2022-11-06'
---

Currently, I am learning the ins and outs of ReactJS. I have built a minimal viable product using React called [TripSave](https://github.com/timtran007/phase-02-project-tripsave). It is a mock application where you can add a destination, budget, current savings and an inspiring destination image to work towards that goal of saving for that trip. 

Anyways, throughout learning React, I have been building Single-Page Applications (SPAs) as practice to get really familiar with syntax and learn how to solve common problems for features such as controlled forms, when to create states, use props, perform CRUD actions, etc. However, one thing that I have noticed while writing React code is that these SPAs do not mimic a "traditional" website in regards to changing the browser's URL when routing to a different portion of the application.

## First of All... What is Routing?
Routing is where users are navigated to different pages on a website.

Normally, with web pages built with HTML, CSS and vanilla JavaScript, each page created for the website lives on a server. The website uses server-side routing in order to send a GET fetch request to the server each time users navigate to different pages and this changes the URL path in the browser's URL.

However, with client-side routing, there is only one request sent to the server at the beginning, which pulls in all the data and code necessary to conditionally render the Single-Page-Application based on features within the web application itself. Like mentioned before, this does not change the URL.

## React & Routing

By default, there is a lot of code and work around that would go into making client-side routing mimic server-side routing within a React application. 

We won't get into those details today...

However, we will be talking about an awesome library that was made specifically to handle routing in React that mimics a server-side approach of changing the URL's path in the browser  that users have grown accustomed to in a traditional website, while providing a better user experience. 

## Pros & Cons of Client-Side Routing
So let's dive right into it...

Pros: 
- Better user experience with "lightning fast" speed while navigating through different components ("pages")
- Developers can create animations in between the load of components allowing users to see that data is loading in a fun way. 
- As users navigate through the React application, there are no refreshes or reloads of the "pages". Components are rendered quickly and does not need to talk to the server to serve new user interfaces.

Cons:
- The initial load time could be a bit longer, since the app is making one request server request to get all data into its components. 
- Harder to implement web analytics tracking with Single-Page-Applications.

As a marketer since 2016 exploring programming, at the end of the day, we should take into consideration the end users. Therefore in my opinion, when the circumstance is right, having the appearance of lightning fast speed across navigating the website outweighs doing more work to implement web analytics (been there and done that with Google Analytics & Tag Manager). 

With that, let's dive into how to create client-side routing for a React application with React Router!

## Introducing React Router

React Router is a library created to deliver a better user experience for React applications by allowing users to create Route components that allows users to navigate to "different" portions of the application. 

### Getting Started
First let's make sure you have the latest version of npm

In terminal you could do the following you can check the version of npm by writing:
`npm -v`

If you need the latest version you can write this into terminal:
`npm install -g npm`

Assuming that you have a React project already, go ahead and type the following into terminal in order download React Router version 5 package:
`npm install react-router-dom@5`

### Adding React Router to your React Application. 
There are a few components that are important in making client-side routing with React Router with your React application: BrowserRouter, Switch, Route and NavLink(Link).

#### BrowserRouter Component
The BrowserRouter component allows you to wrap the components you would like to use add routing. Usually this would be the top-level component.

So, let's go ahead and start by importing the BrowserRouter component to your top-level component and wrapping the component around the App component.

```
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Nav from "./Nav"

function App(){
  return(
    <BrowserRouter>
      <h1>Welcome to the App</h1>
      <Nav />
    </BrowserRouter>
  )
}

export default App;
```

#### Switch & Route Components
The Switch component makes sure that we only render one Route at a time, while the Route component tells us which component will be rendered on the path that matches the URL.

Route is one of the most important components within React Router and it requires the need for a prop called exact to exactly match the path.. 

`<Route exact path="/">{Home}</Route>`

If you do not have the exact prop attached you will not be able to route to other pages because Switch is rendering only one and the Route that matches first, so if you have a path of '/', which is home (normally), without the prop you will not be able to access '/about'.

Let's go ahead and add the components to our code above:

```
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './
import Location from './Location'
import About from './About'

function App(){
  return(
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">{Home}</Route>
        <Route path="/location">{Location}</Route>
        <Route path="/about">{About}</Route>
      </Switch> 
    </BrowserRouter>
  )
}

export default App;
```

#### Should I Use the Link or NavLink Component?
The Link and NavLink components act like the anchor tags and href attribute. The difference between Link and NavLink is the whether you want the selected link to be highlighted our not. 

If you do, you can use NavLink with the prop of activeClassName to see what is currently showing. Otherwise, they have the same functionality. 

So let's go ahead and add the NavLinks to our Nav. 

```
import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav(){
  return(
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
          Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/location" activeClassName="active">
          Location
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
          About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
```

## Conclusion

Again, client-side routing can provide an amazing experience for users navigating through a Single-Page Application with "lightning fast" speeds rendering various components based on routes. 

## TLDR;

### Using BrowserRouter, Switch & Route Components
Use BrowserRouter component to wrap the top-level component where you want to use Routes.

Use Switch and Route components to create paths for components that match what you want to see in browser's URL, while making sure it loads one Route at a time.

```
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './
import Location from './Location'
import About from './About'

function App(){
  return(
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">{Home}</Route>
        <Route path="/location">{Location}</Route>
        <Route path="/about">{About}</Route>
      </Switch> 
    </BrowserRouter>
  )
}

export default App;
```

### Using NavLink or Link Components
Use NavLink or Link to create "anchor tags" with the "to" prop to point where the link takes a user.

```
import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav(){
  return(
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
          Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/location" activeClassName="active">
          Location
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
          About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
```






