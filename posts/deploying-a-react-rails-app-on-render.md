---
title: 'Deploying a React-Rails App on Render'
date: '2022-03-14'
---

I can't believe it! I am almost done with my time at Flatiron School, there is a sense of relief, but at the same time thoughts of what the job search is going to be like has been flooding my mind lately. 

What are hiring managers looking for? Do bootcamp graduates have a chance in a market that seems like we are headed into a recession?

Anyways, after consulting with some people in my network that have been in the industry for quite some time it seems as though the best thing to do is to build applications and deploy to build a portfolio of work!

## Using Render to Deploy a React-Rails App

Render is an amazing tool that we can use in order to easily deploy applications using React and Rails. Oh did I mention that it is free to use?!

Anyways, for deployment purposes you can sign up for a Render account [here](https://dashboard.render.com/register?next=/)! I recommend signing up with your GitHub Account, which will make the process of deploying a lot easier in the future.

A thing to keep in mind for Render is that you will be utilizing PostgreSQL as your database and you can only have one database instance, but there is a work around here that you want to house multiple databases.

### Creating a New Database within your Instance

After creating the initial database, right hand corner with Connect and a dropdown, navigate to 'External Connection' and copy and past the PSQL Command into your terminal. 

This will launch the PSQL command line, where we can go ahead and create a new database!

Run
`CREATE DATABASE meal_time_app_db;`

DO NOT FORGET the semicolon... (I forgot this and reached out to their support and they were really nice in asking if I forgot the semicolon)

Now you can check if a new database has been created by running 
`\l`
this should show you all the databases within the instance. 

### Configuring Your Rails Application

First open the `config/database.yml` and scroll to the production section and update the code to:

```
production:
  <<: *default
  url: <%= ENV['DATABASE_URL'] %>
```

Second, you can open the config/puma.rb file and you can delete everything and paste in the following: 

```
# Puma can serve each request in a thread from an internal thread pool.
# The `threads` method setting takes two numbers: a minimum and maximum.
# Any libraries that use thread pools should be configured to match
# the maximum value specified for Puma. Default is set to 5 threads for minimum
# and maximum; this matches the default thread size of Active Record.
#
max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
threads min_threads_count, max_threads_count

# Specifies the `worker_timeout` threshold that Puma will use to wait before
# terminating a worker in development environments.
#
worker_timeout 3600 if ENV.fetch("RAILS_ENV", "development") == "development"

# Specifies the `port` that Puma will listen on to receive requests; default is 3000.
#
port ENV.fetch("PORT") { 3000 }

# Specifies the `environment` that Puma will run in.
#
environment ENV.fetch("RAILS_ENV") { "development" }

# Specifies the `pidfile` that Puma will use.
pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }

# Specifies the number of `workers` to boot in clustered mode.
# Workers are forked web server processes. If using threads and workers together
# the concurrency of the application would be max `threads` * `workers`.
# Workers do not work on JRuby or Windows (both of which do not support
# processes).
#
workers ENV.fetch("WEB_CONCURRENCY") { 4 }

# Use the `preload_app!` method when specifying a `workers` number.
# This directive tells Puma to first boot the application and load code
# before forking the application. This takes advantage of Copy On Write
# process behavior so workers use less memory.
#
preload_app!

# Allow puma to be restarted by `bin/rails restart` command.
plugin :tmp_restart

```

Third, open the config/environments/production.rb file and find the following line:

```
config.public_file_server.enabled = ENV["RAILS_SERVE_STATIC_FILES"].present?
```

update it to the following:

```
config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present? || ENV['RENDER'].present?
```

Then, we need to run the following command in the terminal of our app's directory: 

```
bundle lock --add -platform x86_64-linux
```

Next, inside the bin folder create a file `meal-time-build.sh` (your-app-name-build.sh)

Within this file you can copy and paste the following: 
```
#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

bundle install
bundle exec rake db:migrate
bundle exec rails db:seed
```

The following script above will be used as the build script later. 

But before that we would need to run the following in your app's terminal:

```
chmod a+x bin/meal-time-build.sh
```
#### Now We Need to Configure Our React App for Deployment

The ultimate goal is to create a static site consisting of pre-built HTML, JavaScript and CSS files that can be served by Rails when a user makes a request to the server to view the front end. 

So in order create a production version of our React application we will need to run

```
npm run build --prefix client
```

Then we need to move this into our public directory, which are the build commands for our front end. 

```
mv client/build/* public
```

### Configuring Rails for Client-Side Routing
Within our React client, we are using client side routing in our development environment; however, for production we need to ensure that we are rendering the HTMl file for our React application since our routes are mainly for the API.

To do this we would need to use namespacing to differentiate the API requests from other requests... 

The solution to this issue would be to add a fallback custom route, which job is to render the the HTML file.

i.e.

```
Rails.application.routes.draw do
    resources :following_ships, only: [:create, :update, :destroy]
    resources :recipes
    resources :shopping_lists
    resources :recipe_ingredients, only: [:create, :update, :destroy]
    resources :ingredients, only: [:create, :update, :destroy]
    get '/users', to: 'users#index'
    get '/user-recipes', to: 'users#user_recipes'
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/following-recipes', to: 'following_ships#show_following_recipes'
    post '/follow-user-recipes/', to: 'recipes#follow_user'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
```

Then we must create a fallback_controller.rb file within app/controllers and create a method that renders the index.html file...

i.e. 

```
class FallbackController < ActionController::Base
    def index
      render file: 'public/index.html'
    end
  end
```

### Creating New Web Service on Render

Within the Render dashboard, we can click the 'New +' button and then navigate to 'Web Service' to begin the process of deploying our React front end with a Rails back end application. 

We need to ensure that we set the following configurations:

1. set the Environment to Ruby
2. enter the following build command - `./bin/meal-time-build.sh`
3. enter the following for the start command - `bundle exec puma -C config/puma.rb`
4. Click 'Advanced' near the bottom of the page...
5. Add Environment Variable - `DATABASE_URL` as the environment variable. For the value find the Internal Database URL and paste it in, BUT be sure to change the database name at the end to the database that was created `~/meal_time_app_db`.
6. Add another Environment Variable `RAILS_MASTER_KEY`, navigate to the config/master.key to copy and paste value into the value field.
7. Then click 'Create Web Service'

You are done!

## Conclusion
After deploying, you can easily update your React app through committing and pushing new code into the repository. GitHub and Render works seamlessly to automatically deploy new code pushes.

Enjoy your application as much as I enjoy creating [Meal Time](https://meal-time-app.onrender.com/)



