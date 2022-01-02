import express from 'express';
import routes from './routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(cookieParser());

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();
