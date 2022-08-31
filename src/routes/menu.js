const { ocrPOST } = require("../controllers/ocrController")

const router = require("express").Router()

router.post("/ocr", ocrPOST)

module.exports = {
    path: "/",
    router
}