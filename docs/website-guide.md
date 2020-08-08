---
id: website-guide
title: Website Guide
sidebar_label: Website Guide
---

By: Melissa Kwan

## Overview

The [HODP website](https://www.hodp.org/) is built with the following stack:
- [React](https://reactjs.org/), a JavaScript library for frontend development. It allows us to declare UI elements as components and reuse them in different configurations.
- [Gatsby](https://www.gatsbyjs.org/), a static site generator that compiles the React code into plain HTML, CSS, and JavaScript as part of the build process. This, along with other optimizations, makes Gatsby sites extremely fast.
- [Sanity](https://www.sanity.io/), a content management system (CMS) that stores the website data for articles, blog posts, team members, datasets, and pages in structured JSON objects. Unlike Wix or Squarespace, Sanity is a *headless* CMS, which means that it only controls the data, not the presentation. As a result, we can query Sanity's API and plug in the data into any frontend that we want.
- [GraphQL](https://graphql.org/), a querying language that allows us to retrieve data from Sanity in a predictable format.
- [Firebase](https://firebase.google.com/), a database that stores our user data for the survey group and the predictions game.
- [Theme UI](https://theme-ui.com/), a styling framework that stores our style guide in one file. It handles sitewide themes with the `theme.js` file, inline styles with the `sx` prop, and styled components with syntax like `<Styled.h1></Styled.h1>`.

If you're curious, all of these frameworks / tools have great tutorials on their websites. For the purposes of developing a web app, you'll only need to know React.

## Running the site locally
First, clone the website repo.

```sh
git clone https://github.com/HarvardOpenData/HarvardOpenData.github.io.git
```
Navigate into the `hodp-website` directory.

```sh
cd hodp-website
```

Temporary pre-launch step: Switch branches to `v2-styling`.

```sh
git checkout v2-styling
```

Install the dependencies (should take a couple minutes).
```sh
npm install
```

Run the site!
```sh
npm start
```

The website will run locally at `localhost:8000`, the GraphQL playground at `localhost:8000/___graphql`, and the Sanity Studio at `localhost:3333`. Since Gatsby has hot reloading, your frontend changes will render instantly.

:::note

If you modify the GraphQL layer, you need to rebuild the site. Quit running it locally (`Ctrl C`) and run `npm start` again.

:::

**Authorized users only**: If you have access to the Sanity Studio, run the following commands:
```sh
npm install -g @sanity/cli
sanity login
[login info here]
```

## Codebase outline
Here are the most important directories and files in the codebase. If you're developing a web app or interactive article, you'll probably be working in the `interactives` directory.
```
- studio
  - schemas
  - static
  - deskStructure.js
- web
  - src
    - assets
    - components
    - containers
    - interactives
    - lib
    - pages
    - styles
```
The `hodp-website` repo essentially stores two websites. The `studio` directory controls the content structure and the frontend of the Sanity studio, and the `web` directory stores the code for our website. All of our content object models are stored in `schemas`, and the frontend structure is specified in `deskStructure.js`. Within `web`, we organize information in a hierarchy of assets (the rare image that we don't want to store in Sanity), components (the building blocks), containers (the wrappers), interactives (the web apps), the library of helpers (for creating image URLs and other useful functions), pages, and styles.

:::note

Don't modify anything in `studio` unless you've gotten the OK from a board member. You should primarily be working in the `web` directory.

:::

## Developing an interactive component
We recommend developing your component in a separate repository before transferring it to the HODP codebase. It'll be easier to preview and test without disrupting other parts of the site.

1. Create a short, descriptive branch off of the main branch with your initials and the feature
    - E.g. `git checkout -b mk-homepage`
2. Navigate to `web > src > interactives` and create a file for your component.
    - Follow the file and component-naming conventions: if your component is named `BlogPost`, your file should be named `blog-post.js`.
    - If your component requires multiple sub-components, create a folder within `interactives` to keep everything organized.
3. Test your component by importing and adding it to the `404.js` page within `web > src > pages`. Since we don't have a dedicated preview page, this is our makeshift way of checking whether the component renders properly. Make sure to delete the component and the import once you've verified that it's working!
4. Add your component as an option to the general `ReactComponent` type of block content. This will allow your content editor to pull your React component directly into the Sanity project. In `components > block-content > embedded-component.js`, import your component and add it to the switch statement. Make sure to follow the existing formatting.
5. Run `prettier --write "**/*.js"` from the `hodp-website` directory to fix formatting issues.
6. Push your changes and make a pull request in GitHub so we can review your code. Once we've approved your changes, we'll merge them into the main branch. Congrats! 🎉

:::note

If you need to install node packages, install them in the `web` directory, *not* the general `hodp-website` directory. If you install them in the general directory, they’ll work locally, but they won’t be recognized in deployment.

:::


## Troubleshooting

### General errors
Make sure you've imported all the components / dependencies you need. Common dependencies include `react`, `Styled`, various components from `theme-ui`, etc. If you pulled code recently, run `npm install`.

Use `console.log` to help you understand how informations is stored in  different fields.

### D3 development issues
Is your component implemented as a class, and if so, did you bind your event handlers in the constructor?
```js {7}
constructor(props) {
    super(props)
    this.state = {
      rotation: 0,
      initialized: false,
    }
    this.initialize = this.initialize.bind(this)
  }
```

### Reach out to the tech team!
Getting stuck sucks. If you have any questions, please contact us over email or on Slack :)
