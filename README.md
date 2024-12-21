# Concise

Concise Backend Take Home Test

## How to Run the Project

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file (you can see the example in `.env.example`).

3. Create the database:

   ```bash
   npx sequelize-cli db:create
   ```

4. Run the migrations:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Seed the database:

   ```bash
   npx sequelize-cli db:seed:all
   ```

6. Run the server in a development environment:
   ```bash
   npm run dev
   ```

## Routes Information

### User Routes

- `GET /users`

  - **Description**: Get all users
  - **Method**: GET
  - **Endpoint**: `/users`
  - **Request**:
    ```json
    {}
    ```
  - **Response**:
    ```json
    [
    	{
    		"id": "integer",
    		"name": "string",
    		"email": "email",
    		"phoneNumber": "string",
    		"address": "string",
    		"createdAt": "date",
    		"updatedAt": "date"
    	}
    ]
    ```

- `GET /users/:id`

  - **Description**: Get user by ID (with user's groups data and user's tasks data)
  - **Method**: GET
  - **Endpoint**: `/users/:id`
  - **Request**:
    ```json
    {}
    ```
  - **Response**:
    ```json
    {
    	"id": "integer",
    	"name": "string",
    	"email": "email",
    	"phoneNumber": "string",
    	"address": "string",
    	"createdAt": "date",
    	"updatedAt": "date",
    	"groups": [
    		{
    			"id": "integer",
    			"name": "string",
    			"description": "string",
    			"createdAt": "date",
    			"updatedAt": "date"
    		}
    	],
    	"tasks": [
    		{
    			"id": "integer",
    			"name": "string",
    			"deadline": "date",
    			"userId": "integer",
    			"createdAt": "date",
    			"updatedAt": "date"
    		}
    	]
    }
    ```

- `POST /users`

  - **Description**: Create a new user
  - **Method**: POST
  - **Endpoint**: `/users`
  - **Request**:
    ```json
    {
    	"name": "string",
    	"email": "email",
    	"phoneNumber": "string",
    	"address": "string",
    	"groups": ["integer"] // Optional
    }
    ```
  - **Response**:
    ```json
    {
    	"id": "integer",
    	"name": "string",
    	"email": "email",
    	"phoneNumber": "string",
    	"address": "string",
    	"updatedAt": "date",
    	"createdAt": "date"
    }
    ```

- `PUT /users/:id`

  - **Description**: Update user by ID
  - **Method**: PUT
  - **Endpoint**: `/users/:id`
  - **Request**:
    ```json
    {
    	"name": "string",
    	"email": "email",
    	"phoneNumber": "string",
    	"address": "string",
    	"groups": ["integer"] // Optional
    }
    ```
  - **Response**:
    ```json
    {
    	"id": "integer",
    	"name": "string",
    	"email": "email",
    	"phoneNumber": "string",
    	"address": "string",
    	"updatedAt": "date",
    	"createdAt": "date"
    }
    ```

- `DELETE /users/:id`
  - **Description**: Delete user by ID
  - **Method**: DELETE
  - **Endpoint**: `/users/:id`
  - **Request**: `id` parameter in URL
  - **Response**: The API returns a 204 No Content status code when the operation is successful.

### Group Routes

- `GET /groups`

  - **Description**: Get all groups
  - **Method**: GET
  - **Endpoint**: `/groups`
  - **Request**:
    ```json
    {}
    ```
  - **Response**:
    ```json
    [
    	{
    		"id": "integer",
    		"name": "string",
    		"description": "string",
    		"createdAt": "date",
    		"updatedAt": "date"
    	}
    ]
    ```

- `GET /groups/:id`

  - **Description**: Get group by ID (with group's users data)
  - **Method**: GET
  - **Endpoint**: `/groups/:id`
  - **Request**:
    ```json
    {}
    ```
  - **Response**:
    ```json
    {
    	"id": "integer",
    	"name": "string",
    	"description": "string",
    	"createdAt": "date",
    	"updatedAt": "date",
    	"users": [
    		{
    			"id": "integer",
    			"name": "string",
    			"email": "email",
    			"phoneNumber": "string",
    			"address": "string",
    			"updatedAt": "date",
    			"createdAt": "date"
    		}
    	]
    }
    ```

- `POST /groups`

  - **Description**: Create a new group
  - **Method**: POST
  - **Endpoint**: `/groups`
  - **Request**:
    ```json
    {
    	"name": "string",
    	"description": "string"
    }
    ```
  - **Response**:
    ```json
    {
    	"id": "integer",
    	"name": "string",
    	"description": "string",
    	"createdAt": "date",
    	"updatedAt": "date"
    }
    ```

- `PUT /groups/:id`

  - **Description**: Update group by ID
  - **Method**: PUT
  - **Endpoint**: `/groups/:id`
  - **Request**:
    ```json
    {
    	"name": "string",
    	"description": "string"
    }
    ```
  - **Response**:
    ```json
    {
    	"id": "integer",
    	"name": "string",
    	"description": "string",
    	"createdAt": "date",
    	"updatedAt": "date"
    }
    ```

- `DELETE /groups/:id`
  - **Description**: Delete group by ID
  - **Method**: DELETE
  - **Endpoint**: `/groups/:id`
  - **Request**: `id` parameter in URL
  - **Response**: The API returns a 204 No Content status code when the operation is successful.

### Task Routes

- `GET /tasks`

  - **Description**: Get all tasks
  - **Method**: GET
  - **Endpoint**: `/tasks`
  - **Request**:
    ```json
    {}
    ```
  - **Response**:
    ```json
    [
    	{
    		"id": "integer",
    		"name": "string",
    		"deadline": "date",
    		"userId": "integer",
    		"createdAt": "date",
    		"updatedAt": "date"
    	}
    ]
    ```

- `GET /tasks/:id`

  - **Description**: Get task by ID (with task's user data)
  - **Method**: GET
  - **Endpoint**: `/tasks/:id`
  - **Request**:
    ```json
    {}
    ```
  - **Response**:
    ```json
    {
    	"id": "integer",
    	"name": "string",
    	"deadline": "date",
    	"userId": "integer",
    	"createdAt": "date",
    	"updatedAt": "date",
    	"user": {
    		"id": "integer",
    		"name": "string",
    		"email": "email",
    		"phoneNumber": "string",
    		"address": "string",
    		"updatedAt": "date",
    		"createdAt": "date"
    	}
    }
    ```

- `POST /tasks`

  - **Description**: Create a new task
  - **Method**: POST
  - **Endpoint**: `/tasks`
  - **Request**:
    ```json
    {
    	"name": "string",
    	"deadline": "date",
    	"userId": "integer"
    }
    ```
  - **Response**:
    ```json
    {
    	"id": "integer",
    	"name": "string",
    	"deadline": "date",
    	"userId": "integer",
    	"createdAt": "date",
    	"updatedAt": "date"
    }
    ```

- `PUT /tasks/:id`

  - **Description**: Update task by ID
  - **Method**: PUT
  - **Endpoint**: `/tasks/:id`
  - **Request**:
    ```json
    {
    	"name": "string",
    	"deadline": "date",
    	"userId": "integer"
    }
    ```
  - **Response**:
    ```json
    {
    	"id": "integer",
    	"name": "string",
    	"deadline": "date",
    	"userId": "integer",
    	"createdAt": "date",
    	"updatedAt": "date"
    }
    ```

- `DELETE /tasks/:id`
  - **Description**: Delete task by ID
  - **Method**: DELETE
  - **Endpoint**: `/tasks/:id`
  - **Request**: `id` parameter in URL
  - **Response**: The API returns a 204 No Content status code when the operation is successful.
