import React from 'react';
import App from './App';
// import Index from './index';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the Crafting Project Manager </p>
    <p> The app was created by Sue Darby, Devine Sims, and Stacie Wyatt. </p>
    <p>The functionality is based on a Task-Manager repo by https://github.com/Tammibriggs/Task-manager and is modded to meet the needs of the project. </p>
    <h2>The Stack </h2>
      <ul>
        <li> The Stack </li>
        <li> Node </li>
        <li> React </li>
        <li> Bootstrap </li>
        <li> Firebase </li>
        <li> Google Auth </li>
      </ul>
      <h2> The Work FLow </h2>
      <p> Users will register with their Google account and will log in.</p>
      <p> Users will be presented with a dashboard with projects; a shopping list; budget; and stash </p>
      <h2>Projects</h2>
        <ul>
          <li> UFO (Unfinished Object) </li>
          <li> Future project with a supply list and inspiration </li>
          <li> Supplies are checked against the stash and if not found added to the shopping list (future feature) </li>
        </ul>
        <h2> Shopping List (future feature)</h2>
        <ul>
          <li> List of items to purchase to complete a project </li>
          <li> Items to refresh the stash for common items</li>
        </ul>
        <h2> Stash (future feature)</h2>
        <ul>
          <li> Shows what is in the stash </li>
          <li> Where it is stored </li>
          <li> Where it was last seen </li>
          <li> Tracks the quantity of items in the stash and adds to the shopping list when the quantity gets low (future feature) </li>
          <li> </li>
        </ul>
    <p> Budgets will show if a project is over or under a targeted budget to assist with money management.(future feature)</p>
    <App />
  </div>
);

export default Home;