import {app} from "./app.js"

const PORT = 5000

app.get("./")

app.listen(PORT, () => {
  console.log(`server running at http://locahost:${PORT}`)
})
