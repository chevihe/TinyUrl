import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser";
import crypto from 'crypto'

import RedirectRouter from './Routers/RedirectRouter.js'
import UserRouter from './Routers/userRouter.js';
import LinkRouter from './Routers/LinkRouter.js';
import connectDB from "./database.js";
import AdvertiserRouter from './Routers/AdvertiserRouter.js';

connectDB();
const app = express()

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hellhgjhgo World!')
})
app.use("/", (req, res, next) => {
  req.UUID = crypto.randomUUID();
  console.log(`request ${req.UUID} started.`);
  next();
});

const port = 3000

app.use('/links',LinkRouter);
app.use('/user', UserRouter);
app.use('/advertiser', AdvertiserRouter);
app.use('/TinyUrl', RedirectRouter);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
