id: react-1
title: React I
sidebar_label: React I

## What is React?

React is one of the most popular tools for building modern websites and web applications. It is a JavaScript library used to create interactive user interfaces that update in real time as data changes.

Instead of manually updating the page when new information arrives, React automatically re-renders only the parts of the website that need to change. This makes it especially powerful for applications that work with live or frequently changing data.

React is declarative and component-based. This means you build your website using small, reusable components (such as charts, tables, or filters), and React handles how those components update on the screen. This approach improves development speed, code readability, and long-term maintainability.

For data journalism and analytics, learning React allows you to create dynamic and interactive experiences.

## 1. Getting Started

Open your code editor and follow along as you read. Experimenting in real time will help reinforce these concepts.

### 1.1 Setting Up Your Project

#### Node.js

React runs on top of Node.js, which allows you to install libraries and run projects locally on your computer.

If you do not have Node.js installed, download it here: https://nodejs.org/en/download

#### Creating a React App

There are multiple ways to create a React app. For this documentation, we will use Vite, a modern build tool with very fast startup times.

```bash
npm create vite@latest hodp-tutorial
```

When prompted:
- Select React
- Select JavaScript

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

#### File Breakdown

**vite.config.js**
- Configuration file for Vite.
- Controls plugins and development server behavior.
- Can be ignored for simple projects.

**package.json**
- Describes your project and its dependencies.
- Includes scripts like `npm run dev`.

**node_modules/**
- Contains installed dependencies.
- Automatically generated when you run `npm install`.

**public/**
- Stores static assets (images, icons, etc.).
- Not processed by React.

**src/**
- The most important folder.
- Contains all of your React code.

Inside `src/`:

**main.jsx**
- Entry point of the application.
- Renders the root React component (`App`) into the DOM.

**App.jsx**
- Main component and container for your app.
- Other components (like `Menu.jsx`) are usually imported here.
- Reusable components are often stored in `src/components/`.

**index.css**
- Global styles.

### 1.3 Running Your Application

```bash
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

When you edit `App.jsx` and save, changes automatically update in the browser via hot reload.

## 2. Core Concepts

### 2.1 JSX (JavaScript XML)

JSX is a syntax that lets you write HTML-like code inside JavaScript.

You can:
- Use standard HTML-like tags (`<h1>`, `<div>`)
- Embed JavaScript using `{}`

Example:

```jsx
const name = "HODP User";
return <h1>Hello, {name}!</h1>;
```

### 2.2 Components

Components are reusable pieces of UI.

Think of a component as a function that returns UI based on inputs.

Example:

```jsx
const Component = () => {
  return <h1>Welcome to HODP!</h1>;
};
```

React applications form a tree structure:
- `App.jsx` is the root.
- Child components branch beneath it.

Components:
- Receive inputs called props
- Return JSX

#### Importing & Exporting Components

To keep projects organized, components are often stored in separate files.

Example:

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

Props (short for properties) allow you to pass data from one component to another.

They function like arguments to a function.

Example:

```jsx
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

<Greeting name="John Harvard" />;
```

:::note

Props are read-only. A component should never modify its own props directly.

:::

### 2.4 Rendering Lists

When working with arrays (for example, API data), you'll often render lists.

React uses `.map()` to transform arrays into UI elements.

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

Each item must include a unique `key` prop.

:::

Other common array methods:
- `map()` → transforms elements
- `filter()` → selects elements
- `reduce()` → combines elements into a single value

### 2.5 Conditional Rendering

React allows standard JavaScript logic inside JSX.

#### Logical AND (`&&`)

```jsx
{isLoading && <p>Loading...</p>}
```

#### Ternary Operator

```jsx
{isLoggedIn ? <Dashboard /> : <LoginForm />}
```

## 3. State, Events, & Hooks

### 3.1 State

#### Understanding State

- Props pass data down.
- State manages data that changes inside a component.

When state changes, React re-renders the component.

#### Using `useState`

```jsx
import { useState } from "react";

function ClickCounter() {
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

`useState` returns:
1. The current value.
2. A function to update it.

### 3.2 Handling Events

React handles user interactions using attributes like:
- `onClick`
- `onChange`
- `onSubmit`

Example:

```jsx
import { useState } from "react";

function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState("");

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

## 4. Fetching Data & useEffect

### 4.1 What Is a Side Effect?

A side effect is anything that happens outside normal rendering:
- Fetching data
- Subscribing to services
- Changing the document title

### 4.2 Using `useEffect`

`useEffect` handles side effects safely.

```jsx
useEffect(() => {
  // code here
}, []);
```

#### Dependency Array Rules

- No array → runs after every render
- Empty array `[]` → runs once on mount
- `[variable]` → runs when that variable changes

### 4.3 Full Fetch Example

```jsx
import { useState, useEffect } from "react";

function LiveDataTracker() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

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

As a data journalist or analyst, your goal is transforming raw data into something digestible.

Most React data work starts with arrays of objects.

You can:
- Render lists
- Build tables
- Feed data into charting libraries (like D3)

## 6. Styling Components

### 6.1 CSS Files

```jsx
import "./App.css";

<div className="dashboard-container">...</div>;
```

:::note

Use `className`, not `class`.

:::

### 6.2 Inline Styles

```jsx
<h1 style={{ color: "blue", fontSize: "24px" }}>
  HODP Analytics
</h1>
```

Inline styles use JavaScript objects.

### 6.3 Tailwind CSS

Tailwind is a utility-first CSS framework.

Example:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Dashboard
</div>
```

## 7. Forms & User Interaction

#### Controlled Components

React state becomes the single source of truth.

Example: Email Validation

```jsx
import { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@harvard.edu")) {
      setError("Please use a valid Harvard email address.");
      return;
    }

    alert("Form submitted!");
    setError("");
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

## 8. Project: Simple Dashboard

This combines:
- State
- Effects
- Data Fetching
- Filtering
- Conditional Rendering

Paste into `App.jsx`:

```jsx
import { useState, useEffect } from "react";

export default function SimpleDashboard() {
  // 1. Setup State
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // 2. Fetch Data on Mount. This is just fake placeholder data 😁.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setRecords(data);
        setIsLoading(false);
      });
  }, []);

  // 3. Filter Data based on user input
  // We use .filter() to only keep records that match the search query
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

Save the file and watch your browser update. Try typing in the search bar to filter the table instantly.
