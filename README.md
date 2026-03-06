# 📘 React Basic Concepts

## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax used in React that allows you to write **HTML-like code inside JavaScript**.

### Why JSX is used

- Makes code easier to read  
- Looks like HTML  
- Helps developers build UI faster  
- Allows JavaScript and UI together  


---

## 2. Difference between State and Props

### Props
Props are **read-only** and are passed from a **parent component to a child component**.  
The child component **cannot change its own props**; it just receives them like a hand-me-down.

### State
State is **private and local** to the component.  
The component **owns its state** and can change it whenever it needs to, usually in response to **user actions like a click**.


---

## 3. What is the useState Hook, and how does it work?

The **useState hook** is used to **create and manage state in functional components**.  
It returns an array with two items:

1. The current state value  
2. A function to update the state
   
---

## 4. How can you share state between components in React?

The most common method is called **Lifting State Up**.  
React follows **one-way data flow**, meaning **data flows from parent to child components**.

### Steps to Share State

- Move the state to the **nearest common parent component**  
- Pass the state down to child components using **props**  

---


## 5. How is event handling done in React?

React handles events using **camelCase event names** and **JavaScript functions**.

### Example

```javascript
<input
  type="text"
  onChange={(e) => console.log(e.target.value)}
/>
