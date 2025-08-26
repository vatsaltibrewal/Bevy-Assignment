import express from 'express';
import cors from 'cors';
import { connectDB } from './src/config/db.js';
import 'dotenv/config';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.use(express.json());

import apiRoute from './src/routes/api.route.js';
import healthRoute from './src/routes/health.route.js';

app.use('/api', apiRoute);
app.use('/health', healthRoute);

const PORT = process.env.PORT || 3000;

connectDB()
.then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})
.catch((error) => {
    console.error('Database connection failed:', error.message);
    process.exit(1);
});