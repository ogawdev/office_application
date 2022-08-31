const Tesseract = require("tesseract.js")
const path = require("path")
const fs = require("fs")

module.exports.ocrPOST = async (req, res) => {
    try {
        let { img } = req.files
        let imageType = img.mimetype.split("/")[0]

        let data
        if(imageType === "image" || imageType === "vector") {
            let imgName = img.md5
            let imgFormat = img.mimetype.split("/")[1]
            let imgPath = path.join(__dirname, "..", "uploads", "img", `${imgName}.${imgFormat}`)

            await img.mv(imgPath)

            data = await Tesseract.recognize(imgPath)
            console.log(data.data.text)   
            // fs.unlink(imgPath)
        } else throw new Error("img type image or vector")

        res.status(200).json({
            ok: true,
            data: data.data  
        })
    } catch(e) {
        console.log(e + "")
        res.status(400).json({
            ok: false,
            message: e + ""
        })
    }
}