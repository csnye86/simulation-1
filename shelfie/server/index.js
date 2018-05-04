const express = require('express');
      bodyParser = require('body-parser');
      ctrl = require('./controller') 
      massive = require('massive')
      require('dotenv').config();

const app = express()
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  dbInstance.seedFile()
    .then(res => console.log('seed successful')) 
    .catch(err => console.log('not successful', err))
  app.set('db', dbInstance)
}).catch(err => console.log(err))

app.get('/api/inventory', ctrl.getInventory)




const port = 3333
app.listen(port, console.log(`Docked at port ${port}`))