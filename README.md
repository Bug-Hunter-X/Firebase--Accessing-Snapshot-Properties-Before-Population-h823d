# Firebase Asynchronous Data Access Error

This repository demonstrates a common error when working with Firebase's asynchronous data fetching: attempting to access properties of a document snapshot before the snapshot has fully loaded. This can lead to unexpected errors and difficult debugging.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file shows the corrected code, demonstrating how to properly handle asynchronous operations with Firebase.

## Setup

1. Clone this repository.
2. Install the Firebase SDK: `npm install firebase`
3. Configure your Firebase project and set up your credentials.
4. Run the code using Node.js.