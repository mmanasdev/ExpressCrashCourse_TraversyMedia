# Express Crash Course

This project is part of the "Express Crash Course" tutorial by Traversy Media, where we learn to build a REST API with Express.js.

## 🎥 Tutorial
- **Title**: Express Crash Course
- **Channel**: Traversy Media
- **Link**: [Watch on YouTube](https://www.youtube.com/watch?v=CnH3kAXSrmU)
- **Description**: Get started with the most popular web framework for Node.js.

## 📚 Tutorial Content

### Fundamentals
- What is Express?
- Opinionated vs Unopinionated Frameworks
- Prerequisites
- Initial Setup
- Basic Server
- --watch Flag & NPM Scripts

### File and Data Handling
- res.sendFile() Method
- Static Web Server
- Working with JSON
- Postman Utility
- Environment Variables (.env)

### Routes and Parameters
- Request Parameters (req.params)
- Query Strings (req.query)
- Status Codes
- Multiple Responses
- Route Files
- ES Modules

### CRUD Operations
- Request Body Data
- POST Requests
- PUT Requests
- DELETE Requests

### Middleware and Error Handling
- Middleware
- Custom Error Handler
- Catch All Middleware
- Colors Package
- Controllers

### Frontend and Templates
- __dirname Workaround
- Frontend API Requests
- Form Submission to API
- EJS Template Setup
- Passing Data to Views
- Arrays and Partials

## 🛠️ Technologies Used
- Node.js
- Express.js v4.21.2
- JavaScript (ES Modules)
- HTML/CSS
- EJS (Template Engine)
- Colors v1.4.0

## 📁 Project Structure
```
├── controllers/
│   └── postControllers.js    # CRUD operations for posts
├── middleware/
│   ├── error.js             # Custom error handling
│   ├── logger.js            # Request logging with colors
│   └── notFound.js          # 404 handler
├── public/
│   ├── js/
│   │   └── main.js          # Frontend JavaScript
│   └── index.html           # Main HTML file
├── routes/
│   └── posts.js             # Post routes
├── server.js                # Main application file
├── package.json             # Project dependencies
└── .env                     # Environment variables
```

## 🚀 Installation and Usage

1. Clone the repository
```bash
git clone https://github.com/mmanasdev/ExpressCrashCourse_TraversyMedia.git
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

4. Access the application
- Frontend: http://localhost:8000
- API: http://localhost:8000/api/posts

## 🔧 API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

### Query Parameters
- `limit` - Limit the number of posts returned (e.g., `/api/posts?limit=2`)

## 📝 Features
- ES Modules implementation (import/export)
- Custom error handling middleware
- Colored request logging
- Complete REST API for posts
- Simple frontend for API interaction
- Environment variable support
- Static file serving
- Form data handling
- Query string support
- Status code management

## 🔍 Development Notes
- The project uses ES Modules (type: "module" in package.json)
- Development mode includes auto-reload with --watch flag
- Environment variables are loaded from .env file
- Custom error handling for 404 and 400 status codes
- Colored console output for different HTTP methods
- Frontend-backend separation with static file serving

## 📄 License
ISC
