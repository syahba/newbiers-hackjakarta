# Documentation

This repository is a project for hackjakarta 2024 were we integrated Nutri-Score system with GrabFood feature. It is created using Node.js, Express.js, ReactJs, PostgresDB and GeminiAI.

## Table Of Contents

- [Installation](#installation)
- [Running the Server](#running-the-server)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/syahba/newbiers-hackjakarta.git
   ```

2. Change to the repository's directory:

   ```bash
   cd newbiers-hackjakarta
   ```

3. Install dependencies:

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

4. Make sure you've installed and configured connection to PostgreSQL in `backend/.env` file:
   ```
   PORT=8080
   DATABASE_URL=<DATABASE_URL>
   API_KEY=<GEMINI_API_KEY>
   ```

## Running the Server

To run the server, use this command:

```bash
cd backend
node .
cd ../frontend
npm dev
```
