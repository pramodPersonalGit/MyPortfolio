# Personal Portfolio

A dynamic, single-page professional portfolio built to showcase technical expertise, work experience, and certifications. The application features an immersive parallax scrolling experience and a modern, responsive design.

## Features

- **Immersive Parallax UI**: Smooth scrolling effects using Framer Motion.
- **Responsive Design**: Tailored for both desktop and mobile viewports.
- **Custom Theming**: Dark mode focused aesthetics powered by Tailwind CSS.
- **Interactive Sections**: Dynamic sections detailing technical skills, work experience, education, and professional certifications.

## Tech Stack

- **Framework**: [React](https://react.dev/) 19 (TypeScript)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: React Router DOM

## Running Locally

To run the portfolio application on your local machine:

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided in the terminal (usually `http://localhost:5173`).

## Build & Deployment

This project is configured to be deployed using GitHub Pages.

To create a production build:

```bash
npm run build
```

To deploy the latest changes to GitHub Pages (this will automatically build the project and push the `dist` folder to the `gh-pages` branch):

```bash
npm run deploy
```

## Linting

To check the code for syntax issues and best practices:

```bash
npm run lint
```