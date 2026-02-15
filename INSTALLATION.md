# Installation Guide

This guide will help you set up and run the portfolio website on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js) or **yarn**

### Check if Node.js is installed

Open your terminal/command prompt and run:

```bash
node --version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)

## Step-by-Step Installation

### 1. Extract the Project

Extract the `portfolio-website.zip` file to your desired location.

### 2. Navigate to the Project Directory

Open your terminal/command prompt and navigate to the project folder:

```bash
cd path/to/portfolio-website
```

### 3. Install Dependencies

Run one of the following commands to install all required packages:

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

This will install all the packages listed below:

- **react** (^18.2.0) - JavaScript library for building user interfaces
- **react-dom** (^18.2.0) - React package for working with the DOM
- **react-router-dom** (^6.20.1) - Routing library for React applications
- **framer-motion** (^10.16.16) - Animation library for React
- **lucide-react** (^0.294.0) - Icon library with beautiful SVG icons
- **tailwindcss** (^3.4.0) - Utility-first CSS framework
- **vite** (^5.0.8) - Fast build tool and dev server
- **autoprefixer** (^10.4.16) - PostCSS plugin to parse CSS
- **postcss** (^8.4.32) - Tool for transforming CSS

### 4. Start the Development Server

Run the following command to start the development server:

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

### 5. Open in Browser

Once the server starts, you'll see output like:

```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production-ready build:

Using npm:
```bash
npm run build
```

Using yarn:
```bash
yarn build
```

The optimized files will be generated in the `dist` folder.

## Preview Production Build

To preview the production build locally:

Using npm:
```bash
npm run preview
```

Using yarn:
```bash
yarn preview
```

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the correct port number.

### Dependencies Installation Failed

If you encounter errors during installation:

1. Delete the `node_modules` folder
2. Delete `package-lock.json` (if using npm) or `yarn.lock` (if using yarn)
3. Run the installation command again

### Module Not Found Errors

Make sure all dependencies are installed correctly:

```bash
npm install
```

### Clear Cache

If you're experiencing issues, try clearing the Vite cache:

```bash
rm -rf node_modules/.vite
```

Then restart the dev server.

## Package List for Manual Installation

If you need to install packages manually, here's the complete list:

### Dependencies:
```bash
npm install react react-dom react-router-dom framer-motion lucide-react
```

### Dev Dependencies:
```bash
npm install -D @types/react @types/react-dom @vitejs/plugin-react autoprefixer postcss tailwindcss vite
```

## Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Router Documentation](https://reactrouter.com/)

## Support

If you encounter any issues, please check:
1. Node.js version (should be 16+)
2. All dependencies are installed
3. No port conflicts
4. Terminal output for specific error messages

Happy coding! 🚀
