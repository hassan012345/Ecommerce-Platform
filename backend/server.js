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
// app.use(cookieParser());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

app.use('/',router);
connection();


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});