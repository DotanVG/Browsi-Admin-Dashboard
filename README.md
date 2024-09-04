# Browsi Admin Dashboard

A full-stack application for managing publishers and domains, developed as part of the Browsi recruitment process.

[![Netlify Status](https://api.netlify.com/api/v1/badges/f8aa5d4d-b159-42b1-b498-870995f2831f/deploy-status)](https://app.netlify.com/sites/browsi-admin-dashboard-dotanv/deploys)

[📺 Watch Demo on YouTube](https://youtu.be/Hc5YSwQcGCg)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Implementation Timeline](#implementation-timeline)
- [Getting Started](#getting-started)
  - [Main Branch Setup](#main-branch-setup)
  - [Deployment-Prep Branch Setup](#deployment-prep-branch-setup)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Personal Note](#personal-note)

## Project Overview

Browsi Admin Dashboard is a web application designed for Browsi's admin-level users to oversee their publishers, domains, and monetization strategies. It provides a user-friendly interface to manage and view publisher data efficiently.

## Features

- Display a list of publishers with their associated domains
- Add new publishers
- View domain details including desktop and mobile ad counts
- Persistent data storage

## Tech Stack

- **Frontend**: Angular 17
- **Backend**: Node.js with Express
- **Database**: JSON file (for demonstration purposes)

## Implementation Timeline

1. **Get Publishers**: Implemented fetching publishers from the backend and displaying them in the frontend.
2. **Add Publisher Button**: Added functionality to create new publishers from the frontend.
3. **Fix DB Bug**: Implemented data persistence to ensure publisher data is saved between server restarts.
4. **Get Domains**: Completed the implementation to fetch and display domain information for each publisher.

## Getting Started

### Main Branch Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/Browsi-Admin-Dashboard.git
   cd Browsi-Admin-Dashboard/fullstack-test/fullstack-test/test
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the backend (in one terminal):
   ```
   cd backend
   node server.js
   ```

4. In a new terminal, run the frontend:
   ```
   cd Browsi-Admin-Dashboard/fullstack-test/fullstack-test/test
   ng serve
   ```

5. Open `http://localhost:4200` in your browser

### Deployment-Prep Branch Setup

1. Switch to the deployment-prep branch:
   ```
   git checkout deployment-prep
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run both frontend and backend concurrently:
   ```
   npm run dev
   ```

4. Open `http://localhost:4200` in your browser

## Deployment

- Frontend: [https://browsi-admin-dashboard-dotanv.netlify.app/](https://browsi-admin-dashboard-dotanv.netlify.app/)
- Backend: [https://browsi-admin-dashboard.onrender.com](https://browsi-admin-dashboard.onrender.com)

Note: Deployment is currently in progress on the `deployment-prep` branch.

## Ideas For Future Improvements

- Implement user authentication
- Add more detailed domain analytics
- Enhance UI/UX with more interactive features
- Implement a proper database solution for scalability

## Personal Note

I would like to express my sincere gratitude to Oran and the entire Browsi team for this opportunity. The project has been an excellent chance to showcase my skills and learn new concepts. I'm excited about the possibility of moving forward in the recruitment process and contributing to Browsi's innovative projects.

---

Note: The main branch contains the minimum required implementation for the home task. For the latest deployment code, please check the `deployment-prep` branch.