const express = require("express")
const cors = require("cors")
const lowDb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
const { nanoid } = require("nanoid")

const db = lowDb(new FileSync('db.json'))

db.defaults({ events: [] }).write()

const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = 4000;

app.get('/events', (req, res) => {
  const data = db.get("events").value()
  return res.json(data)
})

app.post('/events/new', (req, res) => {
  const event = req.body
  db.get("events").push({
    ...event, id: nanoid()
  }).write()
  res.json({ success: true })
})

app.listen(PORT, ()=> {
  console.log(`Backend server listening on port: ${PORT}`)
})