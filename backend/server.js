import express from 'express';
import session from 'express-session';
import cors from 'cors';
import crypto from 'crypto';
import router from './routes/routes.js';
const port = 3000 || process.env.PORT;
import connection from './db/conn.js';
const app = express();


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: 'sPqR0yZmTqWn4r7u!x/A?C)E(H+MbQeThWmZq4t7w!z%C*F-J@NcR',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 1000 * 60 * 60} // Note: The `secure` option should only be enabled for HTTPS
}));


app.use('/',router);
// app.use(session({
//   secret: 'sPqR0yZmTqWn4r7u!x/A?C)E(H+MbQeThWmZq4t7w!z%C*F-J@NcR',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { 
//     secure: false,
//     maxAge: 1000 * 60 * 60
//   },
//   genid: (req) => {
//     return crypto.randomBytes(16).toString('hex');
//   }
// }));

connection();


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});