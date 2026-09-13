Dev Stack

Dev Stack is a responsive React and TypeScript web application that helps developers explore different technologies and build their own technology stack.

Live Demo

Add your deployed website link here:

[https://poetic-dango-042d94.netlify.app/](https://poetic-dango-042d94.netlify.app)

Repository

Add your GitHub repository link here:

https://github.com/MdNimulHasanNirab/Dev_Stack_05

Features

Responsive navigation bar

Mobile navigation menu

Hero section with Dev Stack branding

Technology cards loaded from a JSON file

Technology category, difficulty, rating, and description

Select a technology card with a highlighted border

Add technologies to your personal stack

Prevent duplicate technologies from being added

Disable the button after a technology is added

Remove individual technologies

Remove all selected technologies

Toast notifications for user actions

Loading state while technologies are being loaded

Responsive layout for desktop, tablet, and mobile devices

Footer with logo, social links, product links, company links, and legal links

Technologies Used

React

TypeScript

Vite

CSS

React Toastify

JSON

Project Structure

dev-stack/
├── public/
│   ├── assests/
│   │   ├── banner-stack.png
│   │   └── logo-text.png
│   └── technologies.json
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
├── package-lock.json
└── vite.config.ts

Installation and Setup

1. Clone the repository

git clone https://github.com/your-username/your-repository.git

2. Go to the project folder

cd dev-stack

3. Install dependencies

npm install

4. Start the development server

npm run dev

5. Open the website

Open the local URL shown in your terminal, usually:

http://localhost:5173

How It Works

Explore Technologies

The application loads technology information from:

public/technologies.json

Each technology contains information such as:

Name

Category

Description

Icon

Rating

Difficulty

Badge

Build Your Stack

Click on a technology card to select it. The selected card receives a highlighted border.

Click the Add to Stack button to add the technology to your personal stack.

A technology cannot be added more than once.

Manage Your Stack

You can:

View all selected technologies

Remove one technology

Remove all technologies

See the total number of selected technologies

Available Scripts

Start development server

npm run dev

Create production build

npm run build

Preview production build

npm run preview

React Concepts Used

This project uses:

Components

JSX

TypeScript types

useState

useEffect

Event handling

Conditional rendering

Array map()

Array some()

Array filter()

Fetching JSON data

Props and class names

Responsive CSS

Future Improvements

Add search functionality

Add technology category filtering

Save the selected stack in local storage

Add a dark mode

Add detailed technology pages

Add authentication

Add project recommendations based on the selected stack

Author

Created by Md. Nimul Hasan.

License

This project is created for learning and educational purposes.
