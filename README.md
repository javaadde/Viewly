# Viewly

A modern movie discovery and review platform built with Next.js, React, and MongoDB.

🚀 **Live Demo:** [https://viewly-two.vercel.app/](https://viewly-two.vercel.app/)

## Overview

Viewly is a feature-rich movie platform that allows users to discover, view, and review movies. Built with Next.js 16 App Router, it combines server-side rendering with a modern, responsive UI and secure authentication system.

## Tech Stack

### Frontend
- **Next.js 16 (App Router)** - React framework with server-side rendering and modern routing
- **React 19.2** - UI library with React Server Components
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Toastify** - Toast notifications

### Backend
- **Express.js 5** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8** - MongoDB object modeling
- **iron-session** - Secure session management
- **bcrypt** - Password hashing

### Development
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting
- **Babel React Compiler** - React optimization

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas cluster)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/javaadde/Viewly.git
cd Viewly
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret_key
SESSION_PASSWORD=your_secure_password_for_iron_session
```

## Development

Run the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Scripts

- `npm run dev` - Start development server with webpack
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
viewly/
├── src/
│   ├── app/                    # Next.js App Router directory
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root UI/HTML structure
│   │   ├── globals.css        # Global styles
│   │   ├── login/             # Login page route
│   │   │   └── page.tsx       # Login UI
│   │   ├── movie/
│   │   │   └── [movieId]/     # Dynamic movie route
│   │   │       └── page.tsx   # Movie detail page
│   │   └── api/               # API Route Handlers
│   │       ├── login/
│   │       │   └── route.ts   # Authentication endpoint
│   │       ├── movie/
│   │       │   └── find/
│   │       │       └── route.ts  # Movie search/find endpoint
│   │       └── review/
│   │           └── add/
│   │               └── route.ts  # Add review endpoint
│   ├── components/            # Reusable UI Components
│   │   ├── MovieCard.tsx      # Movie card component
│   │   ├── Navbar.tsx         # Navigation bar
│   │   └── MovieSlider.tsx    # Movie carousel/slider
│   ├── lib/                   # Utility & Core Logic
│   │   ├── dbConnect.ts       # MongoDB connection setup
│   │   └── session.ts         # Session management logic
│   ├── config/                # Application Configuration
│   │   └── session.config.ts  # Session configuration
│   └── interfaces/            # TypeScript Type Definitions
│       └── SessionData.interface.ts  # Session data types
├── public/                    # Static assets
└── package.json              # Dependencies and scripts
```

## Architecture

This project uses Next.js 13+ **App Router** which provides:
- Server Components by default
- Improved routing with nested layouts
- Built-in loading and error states
- Streaming and Suspense support
- Simplified data fetching with dynamic routes like `/movie/[movieId]`

## Features

- 🎬 Browse and discover movies
- 🔍 Search and find movies
- 📝 Write and read movie reviews
- 🔐 Secure user authentication with bcrypt and iron-session
- 🎨 Modern, responsive UI with Tailwind CSS
- 🗄️ MongoDB database for storing movies and reviews
- 💫 Interactive movie cards and sliders
- 🔔 Toast notifications for user feedback
- ⚡ Optimized performance with React Compiler
- 🔒 Type-safe development with TypeScript
- 🚀 Server Components and dynamic routing
- 📱 Fully responsive design for all devices

## API Routes

The application includes the following API endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/login` | POST | User authentication |
| `/api/movie/find` | GET/POST | Search and find movies |
| `/api/review/add` | POST | Submit movie reviews |

All API routes are located in `src/app/api/` and follow Next.js App Router conventions.

## Components

### Reusable UI Components

- **MovieCard** - Displays individual movie information with poster, title, and details
- **Navbar** - Main navigation bar with routing and user menu
- **MovieSlider** - Carousel component for browsing multiple movies

All components are built with React and styled using Tailwind CSS.

## Routes

### Application Pages

- `/` - Homepage with featured movies and browse functionality
- `/login` - User authentication page
- `/movie/[movieId]` - Dynamic route for individual movie details and reviews

The app uses Next.js App Router for file-based routing with dynamic parameters.

## Core Libraries

### Database & Session Management

- **dbConnect.ts** - Handles MongoDB connection and database initialization
- **session.ts** - Manages user sessions with iron-session for secure, encrypted cookies
- **session.config.ts** - Configuration for session handling (cookie settings, session duration, etc.)

### Type Safety

- **SessionData.interface.ts** - TypeScript interfaces for session data structure

## Security

This application implements several security best practices:
- Password hashing with bcrypt
- Secure session management with iron-session
- Environment variable configuration
- MongoDB connection security

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Repository

- **GitHub:** [https://github.com/javaadde/Viewly.git](https://github.com/javaadde/Viewly.git)
- **Live Demo:** [https://viewly-two.vercel.app/](https://viewly-two.vercel.app/)

## Deployment

This application is deployed on Vercel. To deploy your own instance:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables in Vercel dashboard:
   - `MONGODB_URI` - Your MongoDB connection string
   - `SESSION_SECRET` - Secret key for session management
   - `SESSION_PASSWORD` - Secure password for iron-session
4. Deploy!

Vercel automatically handles builds and deployments on every push to your main branch.

## Support

For support, please open an issue in the GitHub repository.

---

Built with ❤️ using Next.js and MongoDB