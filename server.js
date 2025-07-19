import express from "express";
import connectDB from "./db/db.js";
import route from "./routes/routes.js";
import bodyParser from "body-parser";
import session from "express-session";
const DATABASEURL = process.env.DATABASEURL||'mongodb://127.0.0.1:27017/'; 
const app = express();
const port = 3000;


// database connection
connectDB(DATABASEURL);

// body-parser
app.use(bodyParser.urlencoded());


// session
app.use(session({
  secret: 'educationfornation123232',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

// ejs setup
app.set('views', './views');
app.set('view engine', 'ejs');


// routes
app.use('/',route)

app.listen(port,()=>{
    console.log(`Server is running at : http://localhost:${port}`);
})
