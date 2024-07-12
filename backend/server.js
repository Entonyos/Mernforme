const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
mongoose
    .connect(`mongodb://127.0.0.1:27017/Welcome`)
    .then(() => {
        console.log("DB Connected Successfully");
    })

app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`);
})