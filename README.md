# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Libraries

The CSS style library is Bootstrap 4 (https://getbootstrap.com/docs/4.0/getting-started/introduction/).\
The video player is React-Player (https://www.npmjs.com/package/react-player).
The Drag and Drop functionality uses react-dnd, built on HTML5's Drag and Drop API (https://react-dnd.github.io/react-dnd/about)
(React-dnd also utilizes the immutability-helper library.)
HTTP calls are made using axios (https://github.com/axios/axios). 

## Design Decisions, etc.

The app was built using both Functional and Class-based React components. 
Attention was paid to:
     Object-Oriented Design's SOLID principles;
     component re-usability;
     code readibility/simplicity;
     page responsiveness;
     the UI/UX experience. 
The app is divided into 4 parts: 
    1) The Single Page App (App.js); 
    2) The child components and their style sheets (components); 
    3) The components and logic necessary for drag and drop functionality (dnd-components); 
    4) The business logic and API calls necessary to call the words. 
The data flow is as follows: 
    1) An HTTP call is made to the three URLs -> 
    2) The response is filtered through the findCommonWords algorithm -> 
    3) The five most frequently-used words are stored in the words array in the App's state -> 
    4) Those Words are then mapped and passed to the WordButtons component and a Container which contains the React Video Player  -> 
    5) WordButtons' active state is toggled when clicked, and its active state triggers the rendering of a copy of the WordButton component, DraggableBox, which renders on the Video Player ->
    6) DraggableBox is a child of the Box component, which is a child of the Container. These three components work together to create a smooth drag-and-drop functionality, bound by the Video Player's dimensions ->
    7) Besides being toggled on/off and dragged-and-dropped, the DraggableBox component also changes colors when clicked, and keeps track of its left/top coordinates, displayed on-hover via a tool-tip
*State is managed through React's state management system, but for a bigger project, we would use Redux's global store.
*The biggest library decision was choosing react-dnd for drag-and-drop. I tried several other libraries, as well as HTML's native drag and drop API, which all had serious limitations with mouse movement and parent boundaries. Most Drag and Drop libraries are made with the use case of a horizontal/vertical list or array in mind, and react-dnd was the only I found that worked seamlessly.

## Testing Strategy
A sound automated testing strategy in a CI/CD environment would include a combination of isolated unit tests, which test a function's self-contained performance and accuracy; integration tests, which test whether chained functions work well together; and End-2-End (E2E) tests, which test an app's holistic performance in the UI. For the unit and integration tests, you could use Jest, and for E2E tests, you could use popular UI testing tools, like Puppeteer. Especially for the client-facing front-end, E2E testing that writes scripts mimicking a user's behavior flow in the UI is very helpful.   
Branch previews ensure no broken code lands in production.
For code consistency and best practices, use linting and formatting. 
Automated releases and smaller feature flags ensure no big problems are lurking behind slow releases. 
Accessibility tests and audits, via Lighthouse or Cypress, are a great final step. 
