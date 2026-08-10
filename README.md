# Formik & Yup Form Validation Demo

A React application demonstrating form validation using Formik and Yup with routing capabilities.

## 🚀 Live Demo

**Deployed on Vercel:** [https://formik-k5mph200k-urvi-bhavsars-projects-8e00e0f1.vercel.app/](https://formik-k5mph200k-urvi-bhavsars-projects-8e00e0f1.vercel.app/)

## 📋 About

This project showcases form handling and validation in React using:
- **Formik** - For form state management and handling
- **Yup** - For schema-based form validation
- **React Router** - For navigation between User and Admin forms

The application includes two separate forms (User and Admin) with validation for:
- Name
- Email
- Password
- Confirm Password
- Mobile Number

## 🛠️ Tech Stack

- React 18.2.0
- Formik 2.2.9
- Yup 0.32.11
- React Router DOM 6.3.0
- Create React App 5.0.1

## 📦 Installation

```bash
# Install dependencies
yarn install
# or
npm install
```

## 🏃 Available Scripts

### `yarn start` or `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.

### `yarn test` or `npm test`

Launches the test runner in interactive watch mode.

## 🗂️ Project Structure

```
src/
├── App.js              # Main app component with routing
├── User.js             # User registration form
├── Admin.js            # Admin registration form
├── schemas/
│   └── index.js        # Yup validation schemas
├── form.css            # Form styling
├── App.css             # App styling
└── index.js            # Entry point
```

## 🎯 Features

- Real-time form validation
- Error messages on blur and submission
- Password matching validation
- Email format validation
- Mobile number validation
- Form reset after successful submission
- Navigation between User and Admin forms

## 📱 Routes

- `/` - User registration form
- `/user` - User registration form
- `/admin` - Admin registration form

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.
