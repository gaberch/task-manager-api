# Task Manager API

This is a simple NodeJS implementation that can track completed task per a user profile. It contains RESTful APIs, user accounts and user authentications connected to a MongoDB database hosted on MongoDB Atlas. The app uses the free version of SendGRID to send emails when a user account is created and when it is deleted.

API is currently deployed on Heroku at [https://gabe-task-manager.herokuapp.com/](https://gabe-task-manager.herokuapp.com/)

## Environment Variables

Developers must define their own environment variables in a `config` folder located in their root directory. Inside the `config` folder, create a file called `dev.env` and create the following variables:
* PORT - port to use for local development
* SENDGRID_API_KEY - API key you get when signing up for SendGRID
* JWT_SECRET - secret you want to use when validating authentication
* MONGODB_URL - url of your locally running MongoDB

## Available endpoints

* POST `/users` - Creates a new user with a `name`, `email`, `password` and `age` field. Email welcoming user will be sent to email userd in signup.
* POST `/users/login` - Login user with email and password
* POST `/users/logout` - Logout user
* POST `/users/logoutAll` - Logout user from all sessions
* POST `/tasks` - Create a new task with a given `description` parameter. `completed` field is false by default. Must be logged in for this endpoint to work.
* POST `users/me/avatar` - Upload profile picture efor logged in user
* GET `users/me` - Read profile of logged in user
* GET `/tasks` - Read all tasks related to a user profile
    * Accepted queries:
        * `sortBy=<task field>:desc` - sort by in descending order
        * `sortBy=<parameter>:asc` - sort by in ascending order
        * `completed=true` - show tasks that are true
        * `completed=false` - show tasks that are false
        * `limit=<number>&skip=<number>` - show only the number of tasks given in the `limit` parameter and skip the first number of tasks given in the `skip` parameter
* GET `/tasks/:id` - Read one task based on task ID in database
* PATCH `/users/me` - Update user fields
    * Accepted field updates are `name`, `email`, `password` and `age`
* PATCH `users/:id` - Update fields of a task related to logged in user.
    * Accepted field updates are `description` and `completed`
* DELETE `/users/me` - Deletes logged in user. "Goodbye" email sent to user after deletion occurs.
* DELETE `user/me/avatar` - Removes user profile image
* DELETE `tasks/:id` - Deletes specific task from logged in user
