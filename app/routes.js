const express = require('express')
const router = express.Router()
const pg = require('pg')

let client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

client.connect((err) => {
  if(err) {
    console.error('DB connection unsuccessful', err.stack)
  }
  else {
    console.log('DB connection successful')
  }
})

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

router.post('/api/v1/joetest', function (req, res) {
  console.log('Session: ', req.session)
  let theirName = req.session.data['joe-test-name']
  let theirLocation = req.session.data['joe-test-location']
  console.log('Submitted!', `Their name is ${theirName}, and their location is ${theirLocation}.`)
})

module.exports = router
