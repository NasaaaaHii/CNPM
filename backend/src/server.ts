import {app} from "./app.js"
const port: (number | string) = process.env.PORT || 3000

app.get("./",(req,res) => {
  res.send("Backend running")
})

app.listen(port, () => {
  console.log(`server running at http://locahost:${port}`)
})
