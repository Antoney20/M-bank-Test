# M-Banking - React Native Mobile Banking Application

Welcome to M-Banking! This React Native application provides users with a convenient and secure platform for mobile banking. Users can perform various banking activities right from their mobile devices, including checking balances, changing PINs, stopping cheques, and more.

## Features

- Check account balances
- Change PIN
- Stop cheque
- View transaction history
- Secure authentication
- ...and more!

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed:

- Node.js
- npm or yarn
- Expo CLI
- React Native development environment set up (if running on a physical device)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone [React native ui](https://github.com/Antoney20/M-bank-Test.git)
   
2. Navigate to the project directory:
    - cd M-Bank
3. Install dependencies using npm or yarn:
    - npm install
    - it will istall all the neccessary depedencies including expo cli

Running on Mobile Devices
To run the application on your mobile device, follow these steps:

Download the Expo Go app from the App Store (iOS) or Google Play Store (Android).
Scan the QR code displayed in the Expo DevTools or enter the URL provided in the terminal to open the project in Expo Go.



## Backend Setup
The backend of this application is built with PHP Laravel.
Here is the link to the backend setup. [Laravel Backend repo](https://github.com/Antoney20/mobile-api-test.git)

## Tunneling Endpoints with ngrok
To tunnel the backend API endpoints using ngrok, follow steps provided by ngrok documemtation on windows:

Install ngrok by following the instructions on the ngrok website.

Start ngrok and tunnel the backend server port

    ``` bash
    ngrok http 8000 

Copy the ngrok URL provided and replace the base URL in the React Native  .env file application code with the ngrok URL.
