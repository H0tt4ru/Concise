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

- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create a new user
- `PUT /users/:id` - Update user by ID
- `DELETE /users/:id` - Delete user by ID

### Group Routes

- `GET /groups` - Get all groups
- `GET /groups/:id` - Get group by ID
- `POST /groups` - Create a new group
- `PUT /groups/:id` - Update group by ID
- `DELETE /groups/:id` - Delete group by ID

### Task Routes

- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get task by ID
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update task by ID
- `DELETE /tasks/:id` - Delete task by ID
