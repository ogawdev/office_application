const Path = require("path")
const Fs = require("fs")
const Express = require("express")
const CookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")
const morgan = require("morgan")
const cors = require("cors")
const app = Express()

app.use(Express.json())
app.use(Express.urlencoded({ extended: true}))
app.use(CookieParser())
app.use(fileUpload())   
app.use(morgan("tiny"))
app.use(cors())

const RoutesPath = Path.join(__dirname, "routes")
Fs.readdir(RoutesPath, (err, files) => {
    if(err) throw new Error(err)

    files.forEach((file) => {
        const RoutePath = Path.join(__dirname, "routes", file)
        const Route = require(RoutePath)
        if(Route.path && Route.router) app.use(Route.path, Route.router)
    })

    app.get("*", (req, res) => {
        res.status(400).json({
            ok: false,  
            message: "page not found"
        })
    })
})

module.exports = app