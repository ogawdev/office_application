const { cyrillicToLatin } = require("./kirilLatin")
const { latinToCyrillic } = require("./latinKiril")

module.exports.latinKirilPOST = (req, res) => {
    try {
        let { text, type } = req.body

        if(type === "latin") {
            text = latinToCyrillic(text) 
        } else if(type === "kiril") {
            text = cyrillicToLatin(text)
        } else {
            throw new Error("text type 'latin' or 'kiril'")
        }
        
        res.status(200).json({
            ok: true,
            data: {
                text
            }
        })

    } catch(e) {
        console.log(e)
        res.status(400).json({
            ok: false,
            message: e + ""
        })
    }
}