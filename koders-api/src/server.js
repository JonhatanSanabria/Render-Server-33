const cors = require("cors")
const express = require("express")
const koderRouter = require("./routes/koders.router")
const authRouter = require("./routes/auth.router")
const generationRouter = require("./routes/generation.router")

const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use("/koders", koderRouter)
app.use("/auth", authRouter)
app.use("/generations", generationRouter)

app.get("/", (req, res) => {
    console.log("GET request to API")
    res.json({
        message: "Koders API"
    })
})

module.exports = app