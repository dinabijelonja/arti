# Chatbot Application

This is an Angular 19 application for creating and testing a chatbot configuration, uploading knowledge base files, and simulating a chat interface. The application uses PrimeNG for styling, is responsive, and persists data in local storage. It is built with standalone components, leveraging Angular 19's modern architecture.

## Features

- **Chatbot Configuration**: Form to input name, personality (slider), and description, saved to local storage.
- **File Upload**: Mocked upload for .txt files, displaying file names with delete functionality, saved to local storage.
- **Chat Simulation**: Simple chat UI with user input, chat history, and simulated bot responses with a 1-second delay.
- **Responsive Design**: Mobile-friendly layout using PrimeNG and CSS media queries.
- **Local Storage**: Persists chatbot configuration and uploaded file list.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `ng serve` to start the development server.
4. Open `http://localhost:4200` in your browser.

## Real-Time Implementation Suggestion

For a real-time chat implementation, I would use **WebSocket** for bidirectional communication between the client and server. WebSocket is ideal for low-latency, persistent connections, enabling instant message delivery and scalable chat functionality. In Angular, I would use the `ngx-socket-io` library for seamless WebSocket integration, as it provides a simple API for emitting and listening to events. Alternatively, I would consider the native `WebSocket` API for more control. With more time, I would improve the application by adding user authentication, implementing a backend for file uploads, enhancing the bot's response logic with NLP, and adding unit tests for better code coverage.
