import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import User from './models/user.model';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('🚀 TypeScript + Express + MongoDB is running!');
});

app.post('/users', async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/users', async (_req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
