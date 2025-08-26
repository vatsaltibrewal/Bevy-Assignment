# CodeScope - An Advanced GitHub Analyzer

> An API-driven web application featuring a keyword-based repository search, a deep repository analyzer, and a GitHub profile analyzer, all wrapped in a sleek, neo-brutalist UI.

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [API Endpoints](#api-endpoints)
- [Deployment](#-deployment)
- [License](#-license)
- [Contact](#-contact)

## About The Project

This project began as a simple assignment to build a mini web app that fetches data from a public API and displays it. It has since evolved into **CodeScope**, a multi-functional tool for exploring GitHub. It allows users to not only search for repositories by keyword but also to perform deep-dives on specific repositories and user profiles, extracting and displaying key statistics in a visually appealing and performant interface.

The entire application is built with a modern MERN-like stack (MongoDB, Express, React/Next.js, Node.js) and features a unique **neo-brutalist** design theme.

## Key Features

CodeScope provides three core functionalities through a clean, tabbed interface:

-   **🔍 Keyword Search:**
    -   Enter any keyword (e.g., "AI", "games", "typescript").
    -   Fetches a list of relevant repositories from the GitHub API.
    -   Stores the formatted results in a MongoDB database.
    -   Displays the results on a stylish, responsive dashboard.

-   **📊 Repository Analyzer:**
    -   Input a full GitHub repository URL (e.g., `https://github.com/facebook/react`).
    -   Fetches detailed, real-time statistics for that specific repository.
    -   Displays key metrics like Stars, Forks, Open Issues, and primary Language.
    -   Shows the repository owner's avatar and a direct link to the project.

-   **👤 Profile Analyzer:**
    -   Input a GitHub username or profile URL (e.g., `vatsaltibrewal` or `https://github.com/vatsaltibrewal`).
    -   Fetches detailed information about the user.
    -   Displays the user's avatar, bio, follower/following counts.
    -   Lists the user's top 5 repositories sorted by stars.

## Tech Stack

This project is built with modern, industry-standard technologies.

### Frontend

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **HTTP Client:** [Axios](https://axios-http.com/)

### Backend

-   **Framework:** [Express.js](https://expressjs.com/)
-   **Language:** [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (Node.js)
-   **Database ORM:** [Mongoose](https://mongoosejs.com/)

### Database

-   **Database:** [MongoDB](https://www.mongodb.com/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
-   [Node.js](https://nodejs.org/en/) (v18 or later)
-   [npm](https://www.npmjs.com/) (comes with Node.js)
-   [MongoDB](https://www.mongodb.com/try/download/community) or a MongoDB Atlas account.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Setup the Backend:**
    ```bash
    # Navigate to the backend directory
    cd backend

    # Install NPM packages
    npm install

    # Create a .env file in the /backend directory
    touch .env
    ```
    Add your MongoDB connection string to the `.env` file:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```
    Now, start the backend server:
    ```bash
    npm start
    ```
    Your backend server should now be running on `http://localhost:5000`.

3.  **Setup the Frontend:**
    Open a new terminal window.
    ```bash
    # Navigate to the frontend directory from the root
    cd frontend

    # Install NPM packages
    npm install
    ```
    Now, run the frontend development server:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Endpoints

The backend exposes the following REST API endpoints:

| Method | Endpoint                  | Description                                            |
| :----- | :------------------------ | :----------------------------------------------------- |
| `POST` | `/api/search`             | Searches repos by keyword and saves them to the DB.    |
| `GET`  | `/api/results`            | Retrieves all saved repositories from the DB.          |
| `POST` | `/api/analyze/repo`       | Fetches detailed data for a single repository URL.     |
| `POST` | `/api/analyze/profile`    | Fetches detailed data for a GitHub user profile.       |

## 📦 Deployment

### Frontend (Vercel)

The frontend is optimized for Vercel. Simply connect your GitHub repository to Vercel to deploy it automatically.

### Backend (Render)

The backend server can be deployed to any service that supports Node.js, such as [Render](https://render.com/).

1.  Push your `backend` directory to its own GitHub repository.
2.  Connect this repository to your hosting service.
3.  Set the `start` command to `npm start`.
4.  **Crucially, add your `MONGO_URI` as an environment variable in the hosting service's settings.**

After deploying the backend, you will get a live URL (e.g., `https://your-backend.onrender.com`). You must then set this URL as an environment variable in your Vercel project for the frontend to connect to it.

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.