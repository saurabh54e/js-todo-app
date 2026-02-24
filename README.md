JavaScript To-Do App

Day 2 of my 30 Days JavaScript Challenge.

A fully responsive To-Do application built using Vanilla JavaScript with structured state management and localStorage persistence.

## Features

Add new tasks
Delete tasks
Mark tasks as completed
Persistent storage using localStorage
State-driven rendering (No raw HTML storage)
Fully responsive design


## Architecture Approach

This project uses a state-driven architecture.
Tasks are stored as structured data:

[
{ text: "Learn JavaScript", completed: false },
{ text: "Build projects", completed: true }
]

The UI is dynamically rendered from this data using a renderTasks() function.

## Whenever the state changes:

The tasks array is updated
Data is saved to localStorage
The UI is re-rendered


## Tech Stack

HTML5
CSS3
Vanilla JavaScript
localStorage API


## What I Learned

Managing application state using arrays of objects
Rendering UI dynamically from data
Event delegation
JSON.stringify() and JSON.parse()
Refactoring from DOM-based to state-based architecture


## Live Demo
https://saurabh54e.github.io/Js-Day02-ToDo-App/




👨‍💻 Author
Saurabh Singh 
B.Tech CSE (AI & ML) — Web Development | UI/UX | Robotics

⭐ If you like this project, consider giving it a star!
