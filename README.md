# X-Cloud

A simple React application to display a list of blueprints with their details, such as name, tags, and whether they are default. The project demonstrates how to use reusable components and manage data rendering in a grid layout.

## Features
- Display a list of blueprints with names, tags, and toggle buttons.
- Design with Tailwind CSS.
- Simple and reusable React components.

---

## Prerequisites

Before running the application, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sazzadurrahmaan/X-Cloud.git
   ```

2. Navigate to the project directory:
   ```bash
   cd X-Cloud
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

## Running the Application Locally

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```
   
   The application should now be running locally.
---
## Project Structure
```
all-blueprints-project/
├── src/
│   ├── components/
│   │   └── AlphabetFilter.jsx 
│   │   └── BluePrintCard.jsx 
│   │   └── Footer.jsx
│   │   └── Header.jsx 
│   │   └── InputField.jsx 
│   │   └── PluginCard.jsx 
│   │   └── PluginGrid.jsx 
│   │   └── SearchBar.jsx 
│   │   └── Tabs.jsx
│   ├── pageComponents/
│   │   └── AllBluePrints.jsx   
│   │   └── ChooseProvider.jsx  
│   │   └── CreateBluePrint.jsx 
│   ├── App.jsx
│   ├── index.css                # Global CSS and Tailwind setup
│   └── main.jsx                 # Application entry point
├── public/
│   └── index.html               # Main HTML file
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation
```
---

## Technologies Used
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) (for fast development)
- [Tailwind CSS](https://tailwindcss.com/)

---
## Live Linke
- [](https://x-cloud.netlify.app/)


---
