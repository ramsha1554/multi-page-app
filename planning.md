# plans for the routing project

Okay, so I have to build a multi-page app now. I think I will use React Router for this since everyone online says it is the standard library.

## What pages am I building?
- Home page: Just a basic welcome screen. Maybe a paragraph saying who I am and what this website is.
- About page: A page about me. I'll write some stuff about being a student who is learning frontend web dev.
- Contact page: A contact form. Just name, email, message. I don't need a backend, so the form won't actually do anything when you click submit. I'll just write a basic form layout.

## Folders I need:
I should organize my project. I'll create these folders inside `src/`:
- `components/` for shared things like the Navbar and Footer.
- `pages/` for the actual page components (Home, About, Contact).
- `assets/` in case I want to add an image later.

## Components to build:
- Navbar: Needs to show up on all pages. It will have links to Home, About, and Contact. I'll use NavLink from react-router-dom so it highlights which page is active automatically.
- Footer: Just a basic copyright notice at the bottom.

## Routing setup:
I need to install `react-router-dom` first.
In `main.jsx` (or `App.jsx`, not sure which is better), I need to import `BrowserRouter` and setup the routes. I think wrapping everything in `BrowserRouter` and then using `<Routes>` and `<Route>` is how it works. Let me double check the docs. Yeah, that looks right.

Tomorrow I will just create the files and set up the folder structure. No code yet, just getting organized.
