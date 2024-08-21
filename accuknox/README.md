
# React Widget Dashboard

This is a simple and customizable dashboard built with React. It allows users to add, view, and remove widgets in different categories. The project uses Redux for managing the app's state and CSS modules for styling.

## Features

- **Add Widgets:** Easily add new widgets to any category.
- **Remove Widgets:** Delete widgets you no longer need.
- **Responsive Design:** Works well on different screen sizes.
- **State Management:** Uses Redux to manage the app's state efficiently.

## Getting Started

### 1. Clone the Project

First, clone the repository to your local machine:

```bash
git clone https://github.com/Chinmaya0011/AccuKnox

```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary packages:

```bash
npm install
```

### 3. Run the App

Start the development server to see the app in your browser:

```bash
npm start
```

Now, the app should be running at `http://localhost:3000`.

## How to Use

- **View Categories:** Browse through the available categories.
- **Add a Widget:** Click "Add Widget" to add a new widget to a category.
- **Remove a Widget:** Click the "X" button on any widget to remove it.

## Project Structure

Here's an overview of the project's structure:

```plaintext
react-widget-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── Data/       # JSON data for widgets
│   │   └── styles/     # CSS modules
│   ├── components/     # React components
│   ├── features/       # Redux slices
│   ├── App.js          # Main app file
│   └── index.js        # Entry point
├── README.md           # This file
└── package.json        # Project dependencies
```

## Contributing

If you want to contribute:

1. Fork the project.
2. Create a new branch (`git checkout -b your-branch-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Description of changes'`).
5. Push to your branch (`git push origin your-branch-name`).
6. Open a pull request.

## License


---

This README is designed to give a clear and straightforward overview of your project. You can adjust it as needed.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
