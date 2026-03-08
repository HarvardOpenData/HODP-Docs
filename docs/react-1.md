---
id: react-1
title: React I
sidebar_label: React I
---

By: Hudson McGough

## What is React?

React is one of the most popular tools for building modern websites and web applications. It is a **JavaScript library** used to create interactive user interfaces that update in real time as data changes. Instead of manually updating the page when new information arrives, React automatically re-renders only the parts of the website that need to change. This makes it especially powerful for applications that work with live or frequently changing data.

React is **declarative** and **component-based**. This means you build your website using small, reusable components (such as charts, tables, or filters), and React handles how those components update on the screen. This approach improves development speed, code readability, and long-term maintainability.

For data journalism and analytics, learning React allows you to create dynamic and interactive experiences.

## 1. Getting Started

Open your code editor and follow along as you read. Experimenting in real time will help reinforce these concepts.

### 1.1 Setting Up Your Project

#### Node.js

React runs on top of **Node.js**, which lets you install libraries and run projects locally on your own computer. If you do not have Node.js installed, you can download it from [the Node.js website](https://nodejs.org/en/download) by following the instructions for your operating system.

#### Creating a React App

There are multiple ways to create a React app. For this documentation, we will use **Vite**, a modern build tool with very fast startup times compared to most alternatives.

```bash
npm create vite@latest hodp-tutorial
```

When prompted, choose **React** and then **JavaScript**.

<div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
  <img src="/img/creating-react-app1.png" style={{width: '35%', height: 'auto'}} alt="Selecting React in the Vite setup prompt" />
  <img src="/img/creating-react-app2.png" style={{width: '35%', height: 'auto'}} alt="Selecting JavaScript in the Vite setup prompt" />
</div>

Then run:

```bash
cd hodp-tutorial
npm install
```

### 1.2 Project Structure

After setup, your folder structure should look like this:

```
hodp-tutorial/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
├── package.json
└── vite.config.js
```

Here is an overview of each file and folder:

**vite.config.js** — Configuration file for Vite. Controls plugins and server behavior. You can ignore it for most simple projects.

**package.json** — Describes your project and its dependencies (like React), and includes scripts such as `npm run dev`.

**node_modules/** — Contains all installed dependencies. Automatically generated when you run `npm install`. You should never edit this folder directly.

**public/** — Stores static assets like images or icons that do not need to be processed by React.

**src/** — The most important folder — it contains all of your React code.

Inside `src/`:

**main.jsx** — The entry point of your application. It renders the root React component (`App`) into the browser's DOM. You will rarely need to edit this file.

**App.jsx** — The main component and container for your app. As you build your site, you will import other components (like `Menu.jsx`) here. It is also good practice to keep all reusable components in a separate `src/components/` folder.

**index.css** — Global styles for your site.

### 1.3 Running Your Application

```bash
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`). Notice that if you edit `App.jsx` and save, those changes are immediately reflected in the browser via hot reload — no manual refresh needed.

## 2. Core Concepts

### 2.1 JSX (JavaScript XML)

JSX is a syntax that lets you write HTML-like code directly inside JavaScript. Think of it as a combination of JavaScript and HTML. You can use standard HTML-like tags (`<h1>`, `<div>`) and embed JavaScript expressions using curly braces `{}`.

Example:

```jsx
const name = "HODP User";
return <h1>Hello, {name}!</h1>;
```

The curly braces tell React to evaluate the JavaScript expression inside them — in this case, inserting the value of `name` into the rendered heading.

### 2.2 Components

Components are reusable pieces of UI. You can think of a component as a function that takes in some inputs and returns the UI that should be displayed. Components let you break your app into smaller, independently developed pieces that can be reused throughout your project.

Example:

```jsx
const Component = () => {
  return <h1>Welcome to HODP!</h1>;
};
```

React applications form a **tree structure**: `App.jsx` is the root node, and components like `<Header />`, `<Dashboard />`, and `<Footer />` branch out beneath it as child nodes. This mirrors how the browser's DOM (Document Object Model) is structured.

![Component tree structure showing App.jsx as root with child components](/img/components-structure.png)

Components:

- Receive an object of inputs called **props**
- Return **JSX**

#### Importing & Exporting Components

As projects grow, storing all components in one file becomes difficult to manage. To keep your code organized, it is common practice to export each component into its own file and import it wherever it is needed.

```jsx
// src/components/StatCard.jsx

function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default StatCard;
```

```jsx
// src/App.jsx

import StatCard from "./components/StatCard";

function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <StatCard title="Total Records" value={1250} />
      <StatCard title="Average Value" value={42.7} />
    </div>
  );
}

export default App;
```

### 2.3 Props

Props (short for properties) are how you pass data from one component to another. They work like arguments to a function — the props you pass in will determine what gets rendered.

Example:

```jsx
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

<Greeting name="John Harvard" />
```

:::note

Props are **read-only**. A component should never modify its own props directly. To manage data that changes over time, use state (covered in Section 3).

:::

### 2.4 Rendering Lists

When working with arrays of data (such as results from an API), you will often need to render a list of components. React uses JavaScript's `.map()` method to transform an array of values into an array of UI elements.

Example:

```jsx
const todos = ["Fetch data", "Render UI", "Deploy"];

return (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>{todo}</li>
    ))}
  </ul>
);
```

:::note

Each item in the list must include a unique `key` prop. This helps React track which items changed, were added, or were removed, making re-renders more efficient.

:::

Other common array methods you will use in React:

- `map()` — creates a new array by transforming each element
- `filter()` — creates a new array with only elements that pass a condition
- `reduce()` — processes all elements and returns a single value

You can learn more about these in [the learn2code guide on array methods](https://www.learn2code.io/blog/javascript-array-methods-map-filter-reduce).

### 2.5 Conditional Rendering

Sometimes parts of your UI should only appear under certain conditions — like a loading message or an empty state. React lets you use standard JavaScript logic inside JSX to decide what to render.

#### Logical AND (`&&`)

Shows something only when a condition is `true`:

```jsx
{isLoading && <p>Loading...</p>}
```

#### Ternary Operator

A shorthand if-else that chooses between two possible UI states:

```jsx
{isLoggedIn ? <Dashboard /> : <LoginForm />}
```

## 3. State, Events, & Hooks

React apps are interactive. Users click buttons, type into inputs, select dropdowns, and more. To support this, React uses **state** and **events**.

### 3.1 State

#### Understanding State

While *props* pass data down from a parent, **state** manages data that changes *within* a component over time. If you want your UI to react to user actions — like typing in a search bar, clicking a filter button, or opening a dropdown — you need state.

When a component's state changes, React automatically re-renders that component to reflect the new data.

#### Using `useState`

To add state to a functional component, use the built-in React hook `useState`. It gives you two things:

1. The **current value** of the state
2. A **function** to update that value

Here is a simple interactive counter:

```jsx
import { useState } from "react";

function ClickCounter() {
  // Declare a state variable "count", initialized to 0.
  // "setCount" is the function we use to update it.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
}
```

![A working click counter rendered in the browser](/img/click-me.png)

Every time the button is clicked, `setCount` updates the state, and React re-renders the component to display the new count.

### 3.2 Handling Events

React handles user interactions using event attributes like `onClick` (for buttons) and `onChange` (for text inputs). Here is an example of a search filter — something you will use frequently when building data dashboards:

```jsx
import { useState } from "react";

function SearchFilter() {
  // Track what the user types into the input box
  const [searchQuery, setSearchQuery] = useState("");

  // This function runs every time a key is pressed in the input
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search datasets..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <p>Filtering for: <strong>{searchQuery}</strong></p>
    </div>
  );
}
```

![A search input field showing live filtering as the user types](/img/handling-user-input.png)

## 4. Fetching Data & useEffect

Real-world analytics relies on live data. To get that data into your app, you need to fetch it from an external API (Application Programming Interface) or database.

### 4.1 What Is a Side Effect?

In React, a component's job is to take in data (props and state) and return UI (JSX). Anything that reaches *outside* of this predictable process is called a **side effect**. This includes:

- Fetching data from an API
- Setting up subscriptions
- Changing the browser tab's title

### 4.2 Using `useEffect`

To handle side effects safely without interrupting UI rendering, React provides the `useEffect` hook. It tells React: *"Render the UI for the user first. Once that's done, run this extra piece of code."*

`useEffect` takes two arguments:

1. **The setup function** — the code you want to run (like a `fetch()` request)
2. **The dependency array** — a list of variables that controls *when* the effect should re-run

#### Dependency Array Rules

- **No array** → runs after *every* render (dangerous for data fetching — will spam the API)
- **Empty array `[]`** → runs **once** when the component first loads (best for initial data fetches)
- **`[variable]`** → runs on first load and again whenever that variable changes

### 4.3 Full Fetch Example

Good data fetching UI accounts for three states: the data itself, a loading state, and a possible error. Here is a complete, safe example:

```jsx
import { useState, useEffect } from "react";

function LiveDataTracker() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Fetch dummy user data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // 2. Check if the response was successful (status 200-299)
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((jsonData) => {
        // 3. Save the data to state and turn off the loading screen
        setData(jsonData);
        setIsLoading(false);
      })
      .catch((err) => {
        // 4. If anything goes wrong, update the UI with the error
        setError(err.message);
        setIsLoading(false);
      });
  }, []); // Empty array = fetch only once on mount

  if (isLoading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
```

## 5. Working with Data

As a data journalist or analyst, your main goal is taking raw data and making it digestible. In React, this usually starts with arrays of objects — whether loaded from a CSV, a database, or a public API.

You can use the tools covered so far to:

- Render lists of data points
- Build tables from structured records
- Filter and search datasets in real time
- Feed data into charting libraries like D3

More on building charts will be covered in the D3 documentation.

## 6. Styling Components

In React, there are a few different ways to apply CSS to your components.

### 6.1 CSS Files

Write standard CSS in a separate file (like `App.css`) and import it into your component.

```jsx
import "./App.css";

<div className="dashboard-container">...</div>
```

:::note

In JSX, use `className` instead of `class` to assign CSS classes. This is because `class` is a reserved keyword in JavaScript.

:::

### 6.2 Inline Styles

You can apply styles directly to an element. In React, inline styles are written as **JavaScript objects**, not CSS strings.

```jsx
<h1 style={{ color: "blue", fontSize: "24px" }}>
  HODP Analytics
</h1>
```

### 6.3 Tailwind CSS

Writing CSS manually for every element can get time-consuming. [Tailwind CSS](https://tailwindcss.com/) is a utility-first framework that lets you style your components using descriptive class names directly in your JSX — no separate CSS files needed.

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Dashboard
</div>
```

Helpful resources for getting started with Tailwind:

- [Tailwind Cheatsheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Video Tutorial](https://www.youtube.com/watch?v=bnfhmr1v028)

## 7. Forms & User Interaction

When you want users to submit data, configure settings, or apply filters, you need forms. In React, the standard approach is **controlled components**, where React state becomes the single source of truth for every input value. Every time the user types a character, it updates the state, and the state updates the input value.

This real-time control makes it easy to validate data before the user even hits submit.

### Example: Email Validation

```jsx
import { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading on submit
    if (!email.includes("@harvard.edu")) {
      setError("Please use a valid Harvard email address.");
      return;
    }
    alert("Form submitted!");
    setError(""); // Clear any previous error on success
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
```

<div style={{display: 'flex', gap: '1rem'}}>
  <img src="/img/incorrect-form-submission.png" style={{width: '48%'}} alt="Form showing a validation error for a non-Harvard email" />
  <img src="/img/correct-form-submission.png" style={{width: '48%'}} alt="Form successfully submitted with a valid Harvard email" />
</div>

## 8. Project: Simple Dashboard

Now let's combine everything: state, effects, data fetching, filtering, and conditional rendering to build a mini interactive dashboard.

This project fetches a list of users (acting as our data points), includes a search filter, and displays the results in a table.

Paste the code below into your `App.jsx`, save the file, and watch your browser update live.

```jsx
import { useState, useEffect } from "react";

export default function SimpleDashboard() {
  // 1. Setup State
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // 2. Fetch Data on Mount (placeholder data)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setRecords(data);
        setIsLoading(false);
      });
  }, []);

  // 3. Filter data based on the search query
  const filteredRecords = records.filter((record) =>
    record.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 4. Render UI
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Example User Directory</h1>

      {/* Search Input (Controlled Component) */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px", width: "100%", maxWidth: "300px" }}
      />

      {/* Conditional Rendering for Loading State */}
      {isLoading ? (
        <p>Loading directory...</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead style={{ backgroundColor: "#f4f4f4" }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.length > 0 ? (
              filteredRecords.map((record) => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                  <td>{record.address.city}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>No results found.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
```

![The finished Simple Dashboard showing a searchable user table](/img/simple-dashboard.png)

Try typing in the search bar to see the table filter instantly. This is the core interaction pattern behind most data dashboards built in React.
