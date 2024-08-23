import express from "express"
import pg from "pg"
import axios from "axios"
import bodyParser from "body-parser"
import cors from "cors"

const app=express();
const port=3000;

app.use(express.json());
app.use(cors());

const db=new Client({
    host:"localhost",
    port:5423,
    password:"",
    user:"Postgres",
    database:""
})

db.connect()

app.listen((port),()=>{
    console.log(`Listening on port ${port}`);
})