---
title: 'Under the Hood: Front End React Form Submission Persisting to a Rails Back End'
date: '2023-02-11'
---

One of the most important things I have learned so far during my journey into Software Development, is that the ability to talk about your code is a very crucial aspect of being a developer. 

At Flatiron School, there are 4 assessments testing students on their knowledge of what they have learned in each phase of the course. 

If I were honest, I felt as though I scathed by my first 3 assessments with the usage of my technical vocabulary. I honestly believed that as I dove deeper through the course the ability to use technical terms to explain my code would be a lot smoother.

However, earlier today, it finally caught up to me... I did not pass my Phase 4 assessment... 

At first, it was a gut wrench because the thoughts of "is Software Development really for me?", "if I can't pass an assessment, am I good enough to be a developer?" 

Well, imposter syndrome hit hard. I sat staring at my computer trying to figure out what went wrong, but it was a little too late to solve the problem.

I came to the realization, that the amount of work and effort I put in over the last few months of staying awake into the early morning hours, adjusting my priorities with friends and family will not be done in vain. 

For me, this failure... is an opportunity to learn and quickly move on and improve parts of my skills.

So, in an effort to get better at thoroughly explaining technical concepts and be held accountable by publishing to the world, let's dive into what is happening with a form submission from the client side to the back end.

I will be using my phase 4 project [here](https://github.com/timtran007/restaurant-review-app)

## Taking a Look at the Review Form Component

Let's break down what happens with the Review Form after it has been submitted... i.e. our handleSubmit function.

```
function handleSubmit(e){
        e.preventDefault()
        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        }).then( resp => {
            if(resp.ok){
                resp.json().then(newReview => onCreateReview(newReview))
                onHandleSubmit(false)
            } else{
                resp.json().then( error => setErrors(error.errors))
            }
        })
    }
```

First and foremost, we have the event handler handleSubmit that takes in the event parameter, which helps us to execute the preventDefault() method.

The preventDefault method allows for us to submit the form without reloading the entire page.

Next we have a fetch post request with the endpoint of '/reviews'. The fetch requests passes the endpoint, method, headers, and body to the back end.

## From the Front End to Back End in Steps

Before we breakdown the steps, it is very important to understand that our application is set up with a Model, View Controller framework.

This allows us to build our code in regards to having clearly defined separation of concerns.

The typical analogy of an MVC is a layout of a restaurant... 

The model is the chef that never interacts with the patrons(view/front end), and we have the waitstaff(controller) communicating between the two. 

The model handles all back end logic from custom methods to associations to validations, etc.

The view is the front end where users can interact with the application to essentially tell the controller what it needs, and the controller relays the information to the model. 

Once the model interacts with the database, a response is sent  back to the controller and the controller provides the response back to the view.

Now that we have a high-level overview of the MVC framework, let's dive into what is happening under the hood with our fetch post request.

###Step 1:
A fetch request is made with the following information: the endpoint, method, header and body in JSON.stringify format. 

And this request is sent to the back end. In the case of my project the back end is built using Ruby on Rails.

``fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
``

###Step 2:
The request is passed to the config/routes.rb file to make sure that a route has been created for the method, end point, controller and its respective action.

Within my project I have the following in the routes:

```
Rails.application.routes.draw do
  resources :reviews #let's take a look here
  resources :restaurants, only: [:index, :show]
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/user-reviews', to: 'users#user_reviews'
  get '/users-most-reviews/:id', to: 'users#users_most_reviews'
end
```

With `resources :reviews`, we have all 5 actions of index, show, create, update and destroy. In this instance we have a POST request to /reviews that is matched to the create action in the Reviews controller.

To check your routes you can simply type into your terminal:

``rails routes``

You can learn more about resources method [here](https://dev.to/timtran007/rails-routing-resources-vs-resource-gel)!

###Step 3:
Now the requests travels to the controller and goes through the create action.

```
def create
        find_user
        review = find_user.reviews.create!(review_params)
        render json: review, status: :created
    end
```

Our action will not work unless a user has signed into their account. If a user is not logged in they, will not be able to fill out this review form. 

So, luckily for us, we are logged in, which means that our code is taking a look at the users table to find the id attribute correlated to the user's sessions user_id hash value.

###Step 4a:
Continuing to follow the order of the code stack, we have the logged in user create a review, which means that the request is now sent to the review model to check the associations and validation for creating a new review record in our database.

###Step 4b:
But before we can use mass assign the attributes to create the record through this request, we must use strong_params, which is defined within the private method of review_params, to permit the attributes for mass assignment.

```
def review_params
        params.permit(:headline, :rating, :comment, :restaurant_id, :user_id)
    end
```
Otherwise, this will not work due to Rails protection against mass assignment vulnerability.

###Step 5:
As the record is created in our database, our back end code uses render json to convert the model instance into JSON, and since we have a serializer, Rails implicitly will associate the default UserSerializer to the render, where we can customize the output of the json response being prepared to get sent back to the client via the controller action.

The serializer helps us separate the concerns of our Controller vs. having the controller handle what shouldn't be its responsibility.

###Step 6:
Finally, the JSON response is sent back to the front end, where our code utilizes the .json() to parse the JSON into a JavaScript object for us to handle. 

In this instance using a callback to update our state in a parent component.

###Conclusion

As I work towards improving my ability to communicate effectively as a Software Developer, I that there were value information on how the Client-Server relationship works in terms of a form submission that led to a fetch post request!