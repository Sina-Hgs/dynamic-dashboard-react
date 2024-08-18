# Dynamic Dashboard

This is React + TypeScript project, utilizing TailwindCSS, React-Router-Dom, Axios, React-Query, custom-hooks, & Vite.

**Note**: I only used react-router-dom to showcase how I configure my routes, the project could be developed without it.

The UI of the project was design by me in Figma.

To see the project online please Visit [This Link](https://dynamic-dashboard-react-ctbs.vercel.app/)

**Note**: You might need a *VPN* to see the project because it has been deployed on **VERCEL**.

# About
The project is a single-page-application. On first render the app send a **GET** request to fetch userData to show on the page. The project uses *suspese* and *lazy loading*, so when the request is pending a *Loading* component shows up. It also has an *Error* component to show when we encounter an error.

When the user types in the searchbar, the data re-renders to only show the datas that meet the search the criteria. You don't need to press enter or anything for the searchbar to run, it does its function as you write.

The folder structure of the picture is similar to how I usualy develop my projects.

The desgin of this project was done responsively and utilizes *TailwindCSS* custom *themes*.

Some components are route specific, some are global ones that have more than one variant to use (such as button).

# How To Run This Project

**NOTE:**

After installing the packages, use the command 
```
  npm run dev
```
to start the project. 

The project will run at [localhost::3000](http://localhost:3000/)