# Chatbot Application

This is an Angular 19 application for creating and testing a chatbot configuration, uploading knowledge base files, and simulating a chat interface. The application uses PrimeNG for styling, is responsive, and persists data in local storage. It is built with standalone components, leveraging Angular 19's architecture.

## Features

- **Chatbot Configuration**: Form to input name, personality (slider from 0.0 to 1.0), and description, saved to local storage. Personality changes are reflected in the chat simulation without refreshing, using a reactive BehaviorSubject for real-time updates.
- **File Upload**: Mocked upload for .txt files, displaying file names in a PrimeNG listbox with delete functionality, saved to local storage.
- **Chat Simulation**: Simple chat UI with user input, chat history, and simulated bot responses with a 1-second delay. Bot tone (Friendly for personality > 0.5, Formal for personality <= 0.5) updates dynamically based on configuration.
- **Responsive Design**: Mobile-friendly layout using PrimeNG and CSS media queries.
- **Local Storage**: Persists chatbot configuration and uploaded file list.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `ng serve` to start the development server.
4. Open `http://localhost:4200` in your browser.

## Real-Time Implementation Suggestion

**Real-Time Chat**
Implement WebSocket for low-latency, bidirectional communication to enable real-time chat. In Angular, I would use ngx-socket-io for its event-based API, or the native WebSocket API for control. On the backend, use ASP.NET Core with SignalR to manage WebSocket connections efficiently, with Redis Pub/Sub for high-throughput message broadcasting across users.

**Scalability Strategies**
To support more users:
Backend Setup: Build an ASP.NET Core backend to manage chat, file uploads, and users. Add a load balancer to share traffic across servers, keeping the app running smoothly.
Database: Store chat history and files in SQL Server, splitting data into smaller chunks to handle growth. Use Redis to save frequently used data, like recent messages, to speed things up.
Chat Connections: Use SignalR with Redis to support many users chatting at once, keeping all servers in sync. Host the app in multiple locations with a CDN to make it faster for users worldwide.
Usage Limits: Set limits on how many messages or files a user can send to prevent overload and keep the app fair for everyone.

**Additional Enhancements**

User Authentication: Add OAuth 2.0 or JWT-based authentication to secure access and personalize sessions.
Backend File Uploads: Use a technology like Azure Blob Storage for scalable file storage, with validation and presigned URLs for secure uploads.
Enhanced Bot Logic: Integrate NLP for context-aware bot responses, trained on domain-specific data.
Testing: Add unit tests for backend services and Jasmine/Karma for Angular components, with a CI/CD pipeline for quality assurance.
Performance: Use Angular lazy loading for efficient chat history rendering. Conduct load testing to identify bottlenecks.
