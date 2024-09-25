import db from './utils/connection.js';
import './models/OrderModels.js';
import './models/CustomerModels.js';
import './models/TableModels.js';
import "./models/index.js"
import express from "express"
import bodyParser from "body-parser"
import router from "./routes/route.js"
import cors from "cors"

const app = express()
const port = process.env.PORT;

app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// await db.sync({force:true})

app.use("/", router)

app.listen(port, () => {
    console.log(`server running at ${port}`);
})