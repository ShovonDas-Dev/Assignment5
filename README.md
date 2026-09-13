# 🚀 Dev Stack

A modern and interactive web application for exploring and managing different technologies and technology stacks in one place.

## 🌐 Live Demo

🔗 https://dev-stack-red.vercel.app/

## 🛠️ Technologies Used

- ⚛️ React
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🐙 GitHub
- ⚡ Vite

## ✨ Features

### 1. 🔍 Explore Technologies
Browse different technologies with useful information such as their category, description, difficulty level, rating, and technology icon.

### 2. 📚 Build Your Technology Stack
Add your favorite technologies to your personal stack and manage the technologies you want to learn or use.

### 3. 🔔 Interactive User Experience
Enjoy a responsive and modern interface with interactive buttons, notifications, and smooth user interactions.

## 📸 Project Preview

Visit the live project:

👉 https://dev-stack-red.vercel.app/

## 👨‍💻 Developer

**Shovon Kumar Das**

- GitHub: https://github.com/ShovonDas-Dev
- LinkedIn: https://www.linkedin.com/in/shovonkumardas



Simple Qus and Ans

1. What is JSX, and why is it used in React?

Ans: JSX means JavaScript XML. JSX looks like HTML, but it is actually written inside JavaScript. It is used in React to create UI components in a simple and readable way.

2. What is the difference between props and state?

Ans: Props are read-only data. They are passed from a parent component to a child component. State is different. State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?

Ans: useState is a React Hook used to store and change data in a component. I used useState in my project to manage changing data, such as the selected technology stack. When the state changes, the component updates automatically.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

Ans: useEffect is a React Hook used to perform tasks after a component renders. I used useEffect to load the JSON data when the component starts. It helps me fetch the data and display it in the component.

5. Why does every item in a .map() list need a unique key prop?

Ans: Every item in a .map() list needs a unique key so that React can identify each item easily.

6. What is conditional rendering? Show one place you used it.

Ans: Conditional rendering means showing different content based on a condition. For example, in my project, if the stack is empty, I show an empty stack message:

{stack.length === 0 && (
  <p>Your stack is empty</p>
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans: I can easily share data from a parent component to a child component using props. When the parent passes a function to the child component, the child can call that function and send data back to the parent.
