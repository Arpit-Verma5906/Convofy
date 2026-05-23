# Convofy

Convofy is a modern, real-time messenger application. Currently under development, the goal of this application is to provide a seamless, secure, and intuitive chatting experience with real-time text capabilities.

## Project Structure

This project is organized as a unified workspace containing both the server-side backend and client-side frontend.

- `/Frontend`: A React application built with Vite, focusing on a responsive UI with custom theming and animations.
- `/Backend`: A Node.js API written in TypeScript, intended to serve REST endpoints and handle real-time WebSocket connections.

## Technologies

### Frontend
- **React**: Component-based UI formulation.
- **Vite**: Fast, modern frontend build tool.
- **Vanilla CSS**: Custom CSS (`animations.css`, `global.css`, `theme.css`) for UI styling and light/dark modes.

### Backend
- **Node.js**: JavaScript runtime environment.
- **TypeScript**: Statically typed approach for robust backend execution.

## Getting Started

### Prerequisites
Make sure you have [Bun](https://bun.sh/) installed.

### Installation

1. Clone the repository and navigate into the main directory:
   ```bash
   git clone <repository-url>
   cd Convofy
   ```

2. Install Frontend dependencies:
   ```bash
   cd Frontend
   bun install
   ```

3. Install Backend dependencies:
   ```bash
   cd ../Backend
   bun install
   ```

### Running the App

Run both the frontend and backend servers to get the full application working.

#### Start the Backend
```bash
cd Backend
bun run dev
# Replace with the appropriate start script in Backend/package.json
```

#### Start the Frontend
```bash
cd Frontend
bun run dev
```
The client app should now be running at `http://localhost:5173`.

## Roadmap

- [x] Initial Project Scaffolding
- [x] Base UI Components & Authentication layouts
- [ ] Authentication API Integration (Login / Registration)
- [ ] Real-time Messaging via WebSockets (e.g., Socket.io)
- [ ] Group Chats & Direct Messages
- [ ] User profiles and online status indicators

## License
MIT
