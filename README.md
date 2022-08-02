# About this Technical Exercise

You can check the result it this URL: <https://antoniobarranco.github.io/clickerbbva/>

This exercise pretends to cover all mandatory specifications and also some of the optional ones.

I did it with React, because is the JS Frontend Framework in which I have more experience, so I setup a project using the last version or React.js and their familiar tools like React Router, etc.

I have used LocalStorage to save all game state, and the hard exit of the PWA or web is controlled by event handling, so score is always saved propertly. The use or PWA capabilities lets you install the APP and use it offline thanks of cache capabilities, and it updates itself when a new version is published.

I have used a classical architecture for data and state management, with significant components maintaining its own state and descending data to descendants via props and uploading events to parents via callbacks. I think that APP doesn't need more complex approach like using Redux, Context, Reducers and another techniques that lets us build much more complex applications.

The simple approach lets us more testeable components because they usually only depends on their own props and common helper functions.

For the deployment I setup an automatic GitHub deploy workflow that builds the APP on GitHub Pages after successful commits.

For testing requirements, I had experience using Enzyme.JS, but it lack support for last React version (>18), so I used modern snapshot capabilities of Jest and React Testing Library for the purposes that requires some interaction and reading results.

I have been able to cover as much code as I could during the time I had until the delivery date. I am aware that left some code to test, and also deeper learning on my part for testing in React > 18 with the mentioned libraries that are replacing Enzyme and I took contact for the first time from now.

# How to build and deploy locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To build you need Git and Node.js installed.

You can clone this repository locally using:

```bash
git clone https://github.com/antoniobarranco/clickerbbva.git
```

To install all dependencies you need to run on clickerbbva folder:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

**If you get snapshots test fails, update them pressing <kbd>u</kbd> key. After that all test will pass.**

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.