# Sparrow Financial Application

Sparrow is a web and mobile financial application designed to facilitate transactions between users, managed by roles such as admin, agent, and customer. The application uses MongoDB for user authentication and data storage, JWT for user authorization, React and Tailwind for frontend development, and Node.js with Express and Mongoose for the backend. The application ensures a responsive design to provide a seamless experience across all devices.

## Roles

1. **Admin**
   - Manages all users (block, unblock, accept money request and withdraw request).
   - Monitors total transactions and balances.
   - Accesses the transaction history.

2. **Agent**
   - Accepts cash-in from customers.
   - Processes cash-out and money transfer requests from customers.
   - Requests money from the admin.

3. **Customer**
   - Performs cash-in transactions with agents.
   - Initiates cash-out and money transfer to other users.
   - Views transaction history.

## Technology Stack

- Frontend: React, Tailwind, Tanstack Query
- Backend: Node.js, Express, Mongoose
- Database: MongoDB
- User Authentication: MongoDB
- User Authorization and API Security: JWT (JSON Web Tokens)
- Responsive Design

## Getting Started

1. **Clone Repository:**
   ```bash
   git clone https://github.com/tushar-454/sparrow.git
   cd sparrow
