import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://laney522:laney522@cluster0.01b9egk.mongodb.net/?retryWrites=true&w=majority';
const POST = process.env.PORT || 5000;

// https://www.mongodb.com/cloud/atlas 