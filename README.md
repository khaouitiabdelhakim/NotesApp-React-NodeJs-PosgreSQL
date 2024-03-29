# Note App

This is a simple note app built using React for the frontend, Node.js for the backend, and PostgreSQL for the database.

![NoteApp](https://github.com/khaouitiabdelhakim/NotesApp-React-NodeJs-PosgreSQL/blob/main/screenshot.png)


## Usage

### Setting up the Database

1. Create a PostgreSQL database using PG Admin or the CLI.

   ```bash
   createdb -U postgres todo
   ```

2. Create a table named 'notes' in the PostgreSQL database.

   ```sql
   CREATE TABLE IF NOT EXISTS notes (
     id SERIAL PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     content TEXT
   );
   ```

### Installation

1. Install dependencies for both the server and the client.

   ```bash
   npm run build
   ```

2. Start the server.

   ```bash
   npm run start-server
   ```

3. Start the client.

   ```bash
   npm run start-client
   ```

4. Open your browser and go to `http://localhost:3000` to use the Note App.

## Contributing

Feel free to contribute by opening issues or creating pull requests.


