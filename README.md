# Frontend Test for Title Management

This project is a frontend application designed to manage user titles with features like login/signup, MetaMask wallet connect, and CRUD operations for title management. It is built using React and includes integration with MetaMask for wallet connectivity, as well as authentication and title management.

## Features

- **Login/Signup**: Allows users to create an account and log in.
- **Wallet Connect**: Connects to MetaMask for Ethereum wallet functionality.
- **Title Management**: Perform CRUD (Create, Read, Update, Delete) operations for managing titles.

## Technologies Used

- **React**: Library for building user interfaces.
- **MetaMask**: Ethereum wallet for browser integration.
- **@mui/material**: Material-UI components for styling.
- **Axios**: For handling HTTP requests.
- **Jest**: Testing framework for JavaScript.
- **React Testing Library**: For testing React components.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MetaMask**: [Install MetaMask](https://metamask.io/) (Chrome or Firefox extension)

### Setting up the Backend

1. First, clone and set up the backend API server from the following repository:
   git clone https://github.com/GP-Vote/hiring-task.git `cd hiring-task`

2. Install backend dependencies:
3. Start the backend server:

The backend server will typically run at `http://localhost:8000` (verify in the backend README or configuration). Ensure it’s running before starting the frontend.

### Setting up the Frontend

1. Clone this repository:
   git clone https://github.com/skydiver1007/Frontend_test.git cd Frontend_test

2. Install frontend dependencies:
   npm install

3. Create a `.env` file in the root directory with the following environment variable:

4. Start the frontend development server:
   npm start

Open your browser and navigate to `http://localhost:3000`.

## Usage

### Login/Signup

Users can create an account using the **Signup** page or log in using the **Login** page. Authentication data is stored and managed via context.

### Wallet Connect

The **MetaMaskConnect** component enables users to connect their MetaMask wallet to the application. When connected, it displays the user's wallet address in a shortened format.

### Title Management

The **Title Management** page provides functionality to add, edit, delete, and view titles associated with the logged-in user.

### Environment Variables

- **`REACT_APP_API_URL`**: Base API URL for backend services.

## Testing

This project includes unit and integration tests located in the `test` directory.

### Running Tests

To run the tests:
npm test

### Test Coverage

- **Authentication**: Tests for login and signup functionalities.
- **MetaMaskConnect component**: Tests for connecting and disconnecting the wallet, and displaying the wallet address.
- **Title Management**: Tests for creating, reading, updating, and deleting titles.

## Configuration

- **`jest.config.js`**: Configuration file for Jest.
- **`babel.config.js`**: Babel configuration to support ES6+ and JSX syntax.

## Known Issues

- **MetaMask Compatibility**: MetaMask must be installed and enabled in the browser to use wallet-related features.
- **Mocking `window.ethereum` in tests**: Some tests require mocking `window.ethereum` to simulate MetaMask; ensure mocks are correctly configured.

## Future Improvements

- Add additional wallet support (e.g., WalletConnect).
- Implement form validation and error handling for login/signup.
- Improve test coverage, especially for error scenarios.

## Contributing

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
