const { PORT } = require("./config")
const app = require("./src/app")

app.listen(PORT, _ => console.log(`SERVER READY AT PORT ${PORT}`))