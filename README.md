Dev Stack 🚀

Dev Stack is a simple React project where users can explore different technologies and add their favorite technology to their own stack.

I made this project for practicing React basics, component, state management and responsive design.

Live Project

GitHub Repository: https://github.com/MdNimulHasanNirab/Dev_Stack_05

Features

Responsive navbar

Hero section

Technology cards

Search technology

Filter technologies by category

Add technology to Your Stack

Prevent duplicate technology adding

Remove one technology from the stack

Remove all selected technologies

Toast notification

Responsive design for mobile and desktop

Technologies Used

React

TypeScript

Vite

HTML

CSS

React Toastify

Project Structure

src
├── App.tsx
├── App.css
├── index.css
└── main.tsx

public
└── technologies.json

How to Run the Project

First clone the repository:

git clone https://github.com/MdNimulHasanNirab/Dev_Stack_05.git

Then go to the project folder:

cd Dev_Stack_05

Install all packages:

npm install

Run the project:

npm run dev

React Questions and Answers

1. What is JSX?

JSX is a special syntax of JavaScript. It help us to write HTML like code inside JavaScript file. It make React code more easy to understand.

2. What is the difference between state and props?

Props are used to send data from parent component to child component. Props cannot be changed by the child component.

State is used to store data inside a component. When state change, React render the component again.

3. What is conditional rendering?

Conditional rendering means showing different UI based on a condition. We can use if else, ternary operator or && operator for conditional rendering.

4. What is the use of useState?

useState is a React hook which is used for managing state in functional component. It return two things, one is current value and another is function for updating the value.

5. What is the use of useEffect?

useEffect is used for performing side effect in React. For example fetching data, changing document title or running some code after component render.

6. How can you pass data from child component to parent component?

We can pass a function from parent to child using props. Then child component call that function and send data as argument. In this way parent can receive data from child.

7. What is the difference between controlled and uncontrolled components?

Controlled component is controlled by React state. The input value is connected with state.

Uncontrolled component store its value inside the DOM. We can use ref to access the input value.

Conditional Rendering Example

{isLoggedIn ? <h2>Welcome User</h2> : <h2>Please Login</h2>}

Here React show different content based on the value of isLoggedIn.

What I Practiced

While making this project I practiced:

React component

useState

useEffect

Props

Event handling

Array map and filter

Fetching JSON data

Conditional rendering

Responsive CSS

Git and GitHub

Author

Made by Md. Nimul Hasan

Thank you for checking my project!
