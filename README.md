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
  - **Request**: None
  - **Response**:
    ```json
    [
    	{
    		"id": 1,
    		"name": "John Doe",
    		"email": "john.doe@example.com"
    	},
    	{
    		"id": 2,
    		"name": "Jane Smith",
    		"email": "jane.smith@example.com"
    	}
    ]
    ```

- `GET /users/:id`

  - **Description**: Get user by ID
  - **Method**: GET
  - **Endpoint**: `/users/:id`
  - **Request**: `id` parameter in URL
  - **Response**:
    ```json
    {
    	"id": 1,
    	"name": "John Doe",
    	"email": "john.doe@example.com"
    }
    ```

- `POST /users`

  - **Description**: Create a new user
  - **Method**: POST
  - **Endpoint**: `/users`
  - **Request**:
    ```json
    {
    	"name": "John Doe",
    	"email": "john.doe@example.com",
    	"password": "password123"
    }
    ```
  - **Response**:
    ```json
    {
    	"id": 1,
    	"name": "John Doe",
    	"email": "john.doe@example.com"
    }
    ```

- `PUT /users/:id`

  - **Description**: Update user by ID
  - **Method**: PUT
  - **Endpoint**: `/users/:id`
  - **Request**:
    ```json
    {
    	"name": "John Doe",
    	"email": "john.doe@example.com",
    	"password": "newpassword123"
    }
    ```
  - **Response**:
    ```json
    {
    	"id": 1,
    	"name": "John Doe",
    	"email": "john.doe@example.com"
    }
    ```

- `DELETE /users/:id`
  - **Description**: Delete user by ID
  - **Method**: DELETE
  - **Endpoint**: `/users/:id`
  - **Request**: `id` parameter in URL
  - **Response**:
    ```json
    {
    	"message": "User deleted successfully"
    }
    ```

### Group Routes

- `GET /groups`

  - **Description**: Get all groups
  - **Method**: GET
  - **Endpoint**: `/groups`
  - **Request**: None
  - **Response**:
    ```json
    [
    	{
    		"id": 1,
    		"name": "Admins"
    	},
    	{
    		"id": 2,
    		"name": "Users"
    	}
    ]
    ```

- `GET /groups/:id`

  - **Description**: Get group by ID
  - **Method**: GET
  - **Endpoint**: `/groups/:id`
  - **Request**: `id` parameter in URL
  - **Response**:
    ```json
    {
    	"id": 1,
    	"name": "Admins"
    }
    ```

- `POST /groups`

  - **Description**: Create a new group
  - **Method**: POST
  - **Endpoint**: `/groups`
  - **Request**:
    ```json
    {
    	"name": "Admins"
    }
    ```
  - **Response**:
    ```json
    {
    	"id": 1,
    	"name": "Admins"
    }
    ```

- `PUT /groups/:id`

  - **Description**: Update group by ID
  - **Method**: PUT
  - **Endpoint**: `/groups/:id`
  - **Request**:
    ```json
    {
    	"name": "Super Admins"
    }
    ```
  - **Response**:
    ```json
    {
    	"id": 1,
    	"name": "Super Admins"
    }
    ```

- `DELETE /groups/:id`
  - **Description**: Delete group by ID
  - **Method**: DELETE
  - **Endpoint**: `/groups/:id`
  - **Request**: `id` parameter in URL
  - **Response**:
    ```json
    {
    	"message": "Group deleted successfully"
    }
    ```

### Task Routes

- `GET /tasks`

  - **Description**: Get all tasks
  - **Method**: GET
  - **Endpoint**: `/tasks`
  - **Request**: None
  - **Response**:
    ```json
    [
    	{
    		"id": 1,
    		"title": "Task 1",
    		"description": "Description for task 1"
    	},
    	{
    		"id": 2,
    		"title": "Task 2",
    		"description": "Description for task 2"
    	}
    ]
    ```

- `GET /tasks/:id`

  - **Description**: Get task by ID
  - **Method**: GET
  - **Endpoint**: `/tasks/:id`
  - **Request**: `id` parameter in URL
  - **Response**:
    ```json
    {
    	"id": 1,
    	"title": "Task 1",
    	"description": "Description for task 1"
    }
    ```

- `POST /tasks`

  - **Description**: Create a new task
  - **Method**: POST
  - **Endpoint**: `/tasks`
  - **Request**:
    ```json
    {
    	"title": "Task 1",
    	"description": "Description for task 1"
    }
    ```
  - **Response**:
    ```json
    {
    	"id": 1,
    	"title": "Task 1",
    	"description": "Description for task 1"
    }
    ```

- `PUT /tasks/:id`

  - **Description**: Update task by ID
  - **Method**: PUT
  - **Endpoint**: `/tasks/:id`
  - **Request**:
    ```json
    {
    	"title": "Updated Task 1",
    	"description": "Updated description for task 1"
    }
    ```
  - **Response**:
    ```json
    {
    	"id": 1,
    	"title": "Updated Task 1",
    	"description": "Updated description for task 1"
    }
    ```

- `DELETE /tasks/:id`
  - **Description**: Delete task by ID
  - **Method**: DELETE
  - **Endpoint**: `/tasks/:id`
  - **Request**: `id` parameter in URL
  - **Response**:
    ```json
    {
    	"message": "Task deleted successfully"
    }
    ```
