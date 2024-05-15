# React Application Setup For Counter App

This guide provides instructions on how to clone and run a React application from a GitHub repository using either npm or Yarn.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js**: [Download & Install Node.js](https://nodejs.org/en/download/), which includes npm.
- **Yarn** (Optional): [Download & Install Yarn](https://yarnpkg.com/getting-started/install) if you prefer to use Yarn over npm.

## Cloning the Repository

1. Open your terminal (Command Prompt, PowerShell, Terminal, etc.).
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:

    ```bash
    git clone https://github.com/Vibepasson123/gth-assignment.git
    ```

## Installing Dependencies

After cloning the repository, you need to install the necessary dependencies:

1. Navigate into the project directory:

    ```bash
    cd gth-assignment
    ```

2. Install the project dependencies by running:

    ```bash
    npm install
    ```
    Or if you are using Yarn:
    ```bash
    yarn install
    ```

## Running the Application

Once the dependencies are installed, you can run the application locally:

1. Start the development server by running:

    ```bash
    npm start
    ```
    Or if you are using Yarn:
    ```bash
    yarn start
    ```

2. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Troubleshooting

If you encounter any issues, consider the following troubleshooting steps:

- Ensure all commands are run in the project directory.
- Check that Node.js, npm, and (if installed) Yarn are correctly installed by running `node -v`, `npm -v`, and `yarn -v` in your terminal.
- If dependency installation fails, try clearing the npm cache with `npm cache clean --force` or the Yarn cache with `yarn cache clean`, and then reinstall the dependencies.

## Description
The project is divided into three components and one parent component. The parent component, `App.tsx`, serves as the root of the project and contains two state variables: `numbres` and `count`.  `App.tsx` includes a method called `handleNewNumber`, which is assigned to receive numbers from the `IframeSection` via the onMessage callback. Upon receiving a number, it updates the state variables, ensuring that all component data is updated accordingly.
 ### Last five numbers Components 
  This component represents an array of the last five `numbres`, which are passed as props from the parent component. The `numbres` are displayed in different colors on each update, with each number consistently shown in the same color.

### Counter 
This component displays the counter number, which updates with each new iframe data. It is located in the center of the other two sections, and the data is passed from the parent component as a prop called `count`. Additionally, the color of the number text changes with each update.

### IframeSection 

In this component, we use the useEffect hook to listen for updates from the iframe. The hook checks if the iframe has a valid URL and event data, specifically the `randomNumber`. If valid data is received, it is passed to the callback method `onMessage`.

## Utility Functions
 their are two utilify functions for the color management they are getRandomColor() and assignColors

 ### getRandomColor

The getRandomColor function generates a random hexadecimal color code, which is applied to the `Counter` and the `last five numbers` for better user interaction.
  
### assignColors
The `assignColors` function is used to assign a unique random color to each number in an array. It ensures that each number gets the same color every time it appears in the array. This is useful for consistent visual representation of numbers in last five numbers.

## Project Structure
The following is the structure of the project:

```plaintext
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── Counter.tsx
│   │   ├── IframeSection.tsx
│   │   └── LastFiveNumbers.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── reportWebVitals.ts
│   └── utility
│       └── randomColors.tsx
├── tsconfig.json
└── yarn.lock