#Tasks API

##Overview

The Tasks API is a simple RESTful web service that alows users to manage a to-do list. It supports basic CRUD operations: Create, Read, Update, and Delete tasks. This API is useful for learning purposes, task tracking applications, or integrating with task management tools.

## Features

- Create new tasks
- Retrieve all tasks
- Retrive a single task by ID
- Update existing task by ID
- Delete tasks

## Technology Stack

- Language: [ Nodejs]
- Framework: [ Express]
- Database: [In Memory]
- Tools: Postman, curl, etc.

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/airtribe-projects/task-manager-api-KotniSohan98
   cd tasks-api
   npm install
   npm run dev
   Base URL: http://localhost:3000/api/v1/tasks
   ```

   API Endpoints

   1. Create a Task - POST /api/v1/tasks
      Request Body: {
      "title": "Set up environment",
      "description": "Install Node.js, npm, and git",
      "completed": true
      }
      Response Body:{
      "id":1,
      "title": "Set up environment",
      "description": "Install Node.js, npm, and git",
      "completed": true
      }
   2. Get all Tasks - GET /api/v1/tasks
      Response Body:[{
      "id":1,
      "title": "Set up environment",
      "description": "Install Node.js, npm, and git",
      "completed": true
      }]
   3. Get a Single Task - GET /api/v1/tasks/:id
      Response Body:{
      "id":1,
      "title": "Set up environment",
      "description": "Install Node.js, npm, and git",
      "completed": true
      }
   4. Update a Task - PUT /api/v1/tasks/:id
      Request Body: {
      "title": "Set up environment",
      "description": "Install Node.js, npm, and git",
      "completed": true
      }
      Response Body:{
      "id":1,
      "title": "Set up environment",
      "description": "Install Node.js, npm, and git",
      "completed": true
      }
   5. Delete a Task - DELETE /ap1/v1/tasks/:id
