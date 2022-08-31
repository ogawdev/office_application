const Path = require("path")
const Fs = require("fs")
const Express = require("express")
const CookieParser = require("cookie-parser")
const app = Express()

app.use(Express.json())
app.use(Express.urlencoded({ extended: true}))
app.use(CookieParser())


module.exports = app