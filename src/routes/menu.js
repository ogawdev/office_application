const { latinKirilPOST } = require("../controllers/latinKiril/latinKirilController")
const { ocrPOST } = require("../controllers/ocrController")

const router = require("express").Router()

router.post("/ocr", ocrPOST)
router.post("/", latinKirilPOST)

module.exports = {
    path: "/",
    router
}