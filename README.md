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
