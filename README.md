# Futpal Remix

This repository contains the source code for the Futpal 2.0 app.

## Fullstack Web + Native

This app is spun up using Remix as a full-stack framework. It also makes use of Capacitor to build native apps for iOS and Android embedding a web view inside the respective apps. We develop once and ship to all three platforms.

## Getting Started

---

### 0. Clone repository

---

### 1. Install NVM (Node Version Manager) and set Node version

- Install NVM from [here](https://github.com/nvm-sh/nvm#installing-and-updating). This will enable you to set your node version to the one we are using for this project.
- If on windows install nvm from here https://github.com/coreybutler/nvm-windows download setup.zip and run (you will need to restart vs code before )
- Open a terminal window and `cd` into the root of this project.
- Install the project’s node version
  ```bash
  nvm install
  ```
- Set your computer’s node version to the project’s node version
  ```bash
  nvm use
  ```

---

### 2. Install dependencies

- Install dependencies for the project
  ```bash
  pnpm install
  ```

---

### 3. Run the database locally

- Install Docker from [here](https://docs.docker.com/get-docker/).
- Run the docker compose file
  ```bash
  docker-compose up -d
  ```
- Check that the database is running
  ```bash
  docker ps
  ```
- Migrate the database to set up tables
  ```bash
  pnpm db:migrate
  ```
- Seed the database with randomised data

  ```bash

  need to run "pnpm db:migrate"
  need to run "pnpm prisma generate"
  make sure env file is included
  pnpm db:seed
  ```

---

### 4. Run the app locally

- Start the app in dev mode
  ```bash
  pnpm dev
  ```
- (Optional) Run the iOS simulator via Capacitor
  > **Warning** This will only work on macOS
  - Open the project in XCode:
    ```bash
    pnpm cap open ios
    ```
  - Select a simulator from the dropdown menu in the top left corner
  - Build and run the app with <kbd>Cmd + R</kbd> or the play button in the top left corner

---

### 5. Contribute

- Open a Pull Request with your changes
- When it gets merged, the app will be automatically deployed to fly.io
