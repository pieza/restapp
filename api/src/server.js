const express = require("express")
const morgan = require("morgan")
const path = require("path")
const fs = require("fs")
const cors = require('cors')
const app = express()
const handleError = require('./utils/error-handler')

// server settings
app.set("port", process.env.PORT || 3000)

// middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// error handle
app.use(handleError)

// static files
app.use(express.static(path.join(__dirname, "..", "public")))

// default Route
app.use("*", (req, res, next) => {
  if (!req.originalUrl.includes(process.env.API_PATH))
    res.sendFile(path.join(__dirname, "..", "public", "index.html"))
  else next()
})

// routes
const normalizedPath = path.join(__dirname, "routes")
// auto register all routes in /routes folder
fs.readdirSync(normalizedPath).forEach((file) => {
  if(!file.match(/^(.*)\.route\.js$/)) return
  let Route  = require("./routes/" + file)
  app.use(`${process.env.API_PATH}`, new Route().router)
})

module.exports = app