# Thread & Needle Backend
This is a modern, full-stack e-commerce platform designed to deliver a complete online shopping experience. Built with React and TypeScript on the frontend and Node.js with Express on the backend, it offers secure user authentication, a dynamic product catalog, and efficient order management. The user interface is cleanly styled with Tailwind CSS for a responsive and intuitive design.

project link http://54.90.193.130:5173

## Features
- User Authentication & Authorization: Secure registration, login, and protected routes using JWTs.
- Product Management: APIs for creating, reading, updating, and deleting product information.
- Data Validation: Robust input validation for all incoming requests.
- Password Security: Secure hashing of user passwords.
- Database Integration: Seamless interaction with MongoDB.

## Technologies Used

## Backend:
- Node.js: A JavaScript runtime for building scalable server-side applications.
- Express.js: A fast, unopinionated, minimalist web framework for Node.js.
- Joi: For robust request body validation, ensuring data integrity.
- Bcrypt.js: For securely hashing user passwords.
- JSON Web Token (jsonwebtoken): For secure user authentication and authorization.

## Database:
- MongoDB: A NoSQL database for flexible data storage.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying data interactions.

## Deployment
The frontend is deployed on AWS and continuously maintained for optimal performance.

## Getting Started
1. Clone the repository:
```
git clone https://www.google.com/search?q=https://github.com/zackaryoconnor/ecommerce-backend.git
cd ecommerce-backend
```

2. Install dependencies:
```
npm install
```

3. Set up environment variables:
Create a .env file in the root of the project and add the following:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=a_strong_secret_key_for_jwt
```

4. Start development server:
```
node server.js
```

## API Endpoints
- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- GET /api/products - Get all products
- GET /api/products/:id - Get a single product by ID



## Front repository:
https://github.com/zackaryoconnor/ecommerce-site.git

<img width="500" alt="Screen Shot 2025-05-20 at 11 11 57 AM" src="https://github.com/user-attachments/assets/35c17fbd-775f-491f-9b2f-f31ab85f889d"/>
<img width="500" alt="Screen Shot 2025-05-20 at 11 12 44 AM" src="https://github.com/user-attachments/assets/de995d16-1f31-4398-a9cc-a768905455b5"/>
project link http://54.90.193.130:5173
