---
title: 'Rails Routing - resources vs. resource Methods'
date: '2022-03-23'
---

I am officially graduated from Flatiron School coding bootcamp! But the work is never finished ;)

One of my goals was to upgrade my projects by deploying them and a couple of weeks ago I created a documentation on how to deploy your Rails & React app with Render for free! You can check out that article [here](https://dev.to/timtran007/deploying-a-react-rails-app-on-render-4lo4). This will come in handy later.

I did some searching, but couldn't find exactly what I was looking for, so here is the compilation of deploying a Rails-React application that uses SQLite3.

We are going to dive into converting a SQLite3 database into PostgreSQL to deploy projects that you have created with SQLite3. 

### Step 1: Swapping out SQLite3 for PG

This first step is based on the assumption that you have postgres installed on your local machine.

First we need to locate our Gemfile, and make the update to the following: 

```
gem "sqlite", "~> 1.4"
```
to
```
gem "pg", "~> 1.1"
```

then we are going to run the following in the terminal of the directory:

```
bundle install
```

### Step 2: Update database.yml file

This file will allow us to point to our database within our different levels of environment.

```
default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>

development:
  <<: *default
  database: meal_time_app_development

test:
  <<: *default
  database: meal_time_app_test

production:
  <<: *default
  url: <%= ENV['DATABASE_URL'] %>
```

(notice that database is name_of_your_app followed by the respective environment)

### Step 3: Deleting SQLite3

We are going to look in the db folder and delete the following files development.sqlite3 and test.sqlite3

### Step 4: Running Migration
We are now going to run the following in our directory:

```
rails db:create db:migrate db:reset
```

### Step 5: Follow the Guide to Deploying a React & Rails App.

You are all set! Now you can follow my previous [post] (https://dev.to/timtran007/deploying-a-react-rails-app-on-render-4lo4) on deploying a Rails-React app using Render!

##Conclusion
Now enjoy the luxury of deploying your projects on Render by converting your SQLite3 database to PostgreSQL.