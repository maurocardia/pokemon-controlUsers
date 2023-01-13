const express = require("express")
const cors = require("cors");
const helmet = require ("helmet")
const compression = require("compression")
const morgan = require("morgan")
const path = require("path");


const {usersRouter}= require("./routes/users.routes")
const { characterRouter } = require("./routes/characters.routes")

const {globalErrorHandler} = require("./controllers/error.controller")

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));

app.use(cors())

app.use(helmet())
app.use(compression())

if(process.env.NODE_ENV === "development")app.use(morgan("dev"))
else if(process.env.NODE_ENV === "production") app.use(morgan("combined"))


app.use('/api/v1/usuarios', usersRouter);
app.use('/api/v1/personajes', characterRouter);

app.use("/", (req, res, next) => {
   
    const indexPath = path.join(__dirname, "public", "index.html");
    res.status(200).sendFile(indexPath);
  });


app.use(globalErrorHandler)

app.all("*",(req,res)=>{
    res.status(404).json({
        status: "error",
        message: `${req.method} ${req.url} does no exists in our server`
    })
})

module.exports = {app}