---
title: 'Rails Routing - resources vs. resource Methods'
date: '2023-01-08'
---

As I am learning more and more about Ruby and Rails, I am beginning unfold CRUD actions and their related behavior in /config/routes.rb file.

What I have gathered so far is that Rails makes it easy to create routes. You can do it by hand (saved for custom non RESTful routes) or automatically with the resource method (or shall I say resources method... more on this later). 

However, attention to detail is key as I was stuck on trying to pass an rspec test by automatically creating my 6 RESTful routes.

## The Setup
Let's go ahead and set up a new Rails API application (you have Rails installed already)

`rails new bird-api --api --minimal`

This will create a new Rails API application for us to work through. 

Then let's go ahead and create our migration and model through the use of Rails generator:

`rails g model Birds name species`

This will create our migration of a birds table with columns of name and species in string format.

Then we can go ahead and migrate with:
`rails db:migrate`

Great!!

Let's go ahead and finish up by generating a controller to handle our routes.

`rails g controller birds`

## Creating Routes By Hand
Let's go ahead and dive into our routes.rb file and create the routes that we want for our birds controller to provide a JSON rendered response.

```
Rails.application.routes.draw do
  #let's handle our routes manually below
  get 'birds', to: 'birds#index'
  get 'birds/:id', to: 'birds#show'
end
```

We can do a quick check to see if this works with:
`rails routes`

## Creating the Controller Actions
Now let's quickly set up our controller actions to handle our RESTful routes of index and show.

```
class BirdsController < ApplicationController
  #let's go ahead and add our controller actions
  def index
    render json: Bird.all, status: :ok
  end

  def show
    bird = Bird.find(params[:id])
    if bird
      render json: bird, status: :ok
    else
      render json: {error: "bird not found"}, status: 
      :not_found
    end
  end
end
```
Great! We can check to see if this works by adding seed data and seeding our application.

Then we can spin up our server:

`rails s`

For our RESTful route for /birds, we should see something similar (dependent upon seed data):

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4budukjfpvc7dylg02cl.png)

And for our RESTful route for /birds/:id, we should see:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6g5jqjgln3gi4lpx07uh.png)

## Let's Automate Our RESTful Routes With resource
Great! Now let's refactor our code to automate the Routes.

We can do this by going into our config directory and routes.rb file

```ruby
Rails.application.routes.draw do
  #manual way to create our route
    #get 'birds', to: 'birds#index'
    #get 'birds/:id', to: 'birds#show'
  #automated way to create our routes
    resource :birds, only: [:index, :show]
end
```
Let's go ahead and check our routes to make sure that we got our two routes by running:
`rails routes`

Oh no!! We only have one route for our birds controller with the action of show...

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hfcpheilfc6wish4jzf4.png)

Why do we only have one route created?

## 'resource' Method vs. 'resources' Method

Like I mentioned before... attention to detail is the key here. By not adding an 's' to the end of 'resource' method we only generate the show action for the birds controller in the code above.

Let's take a deeper look into the RESTful routes created if we run just `resource :birds` instead of the additional `only: [:index, :show]...

We get only 5 RESTful routes that do not make sense at all:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rdiqgwwsfuyo8oe34q0j.png)

As you can see there are actions for our birds controller for updating and destroying all birds... With RESTful routes conventions, we must target a specific bird to update and destroy.

Now let's go ahead and take a look at if we used the 'resources' method instead:

```
Rails.application.routes.draw do
  resources :birds
end
```

We get 6 RESTful Routes that actually makes sense! Two for our `/birds` and four for individual birds `/bird`:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdcpcakcouy9u0s0p3nb.png)

## Conclusion
We can solve the problem of creating our birds controller action of index and show by simply writing:

`resources :birds, only: [:index, :show]`

Rails provides easy ways to automate tedious tasks such as creating routes, but it can get tricky at times troubleshooting since you don't necessarily get an outright error that says don't use 'resource', instead use 'resources'. 

The devil is in the details, as I struggled to pass my rspec tests all because I left out the 's' in resources. I hope you can learn from my experience of troubleshooting the automation of creating RESTful routes.

# TLDR;
Use `resources :controllers_name` and not `resource :controllers_name` when automating the creation of RESTful routes.



