# calendar-fun
This repo contains a sample React application that makes use of Google Calendar API to read information about user's calendars and events.

## Requirements

* Node >= 8.10 
* npm >= 5.6 

## Setup

1. Install app dependencies:
    ```
    nvm install
    ```
2. Create an `.env` file in the root of the project containing:
    ```
    REACT_APP_GOOGLE_CALENDAR_CLIENT_ID=<PUT_YOUR_CLIENT_ID_HERE>
    REACT_APP_GOOGLE_CALENDAR_API_KEY=<PUT_YOUR_API_KEY_HERE>
    ``` 

For more information about Google Calendar API configuration please visit [Browser Quickstart](https://developers.google.com/calendar/quickstart/js#step_1_turn_on_the)

## Testing the application

To run tests in interactive watch mode:

```
npm test
```

To run code formatters and fix most style/linting issues:

```
npm run format
npm run lint
```

## Starting the application

To start the application locally in development mode:

```
npm start
```

You can then access the application at [http://localhost:3000](http://localhost:3000).

## Building the application

To build the application for production:

```
npm run build
```
