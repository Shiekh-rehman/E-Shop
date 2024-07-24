// import 'dotenv/config'
import express from "express"
import productRoutes from "./routers/products.routes.js"

const app = express()


app.use('/', productRoutes)

app.listen(process.env.PORT, () => {
    console.log("server is running")
})