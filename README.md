# Chat (front-end)

Front-end part of the Chat application.

## Getting Started

To set up the development environment, first clone the repo.

Change into the frontend directory and run the following commands:

```
  npm install
  npm run dev
```

## Stack

- React
- TypeScript
- Tailwind CSS
- Redux/RTK Query
- React Router

## Workflow

This project uses a 2 legged branching strategy with main being the production version of the code; the main branch reflects the current version that is currently live to the public.

When you are contributing to the project, you will need to create a new branch based on the main branch. Please format the branch with a prefix and a name that best describes the type of change being implemented these contain:

- `feature/` (New feature branches)
- `fix/` (Fixes for branches)
- `task/` (Generic branches for mundane tasks, such as updating a lang file or dependencies)

Once you have selected the branch type please create a branch name as a suffix. For example, if you had a branch that implemented a login button on the home page you would call it `feature/home-page-login-button`
