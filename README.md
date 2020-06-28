# To Do List

I started this project to learn how to build a React.js application from scratch.

The app is deployed on Github Pages: https://jarasmar.github.io/To-Do-List

## How to run the app locally
- Clone or download this repository.
- Move to the root folder of the project.
- Open a terminal and run:
`yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Future Features
-
- 

## What I've learnt

#### Install Font Awesome
```
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/react-native-fontawesome
```

#### Install FlipMove Animations
```
$ npm i -S react-flip-move
```

#### Deploy React App to GitHub
- Install gh-pages
```
$ npm install gh-pages --save-dev
```

- In package.json
  - Add a property `homepage` with value `https://username.github.io/project-name`
  - Add scripts
  ```
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
  ```
- In the terminal run:
```
$ git remote set-url origin https://github.com/username/project-name
$ npm run build
$ npm run deploy
```
- The app is deployed in the URL provided as homepage