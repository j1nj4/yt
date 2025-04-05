const os = require('os')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 3000

// yt project 

// sudo apt install update
// sudo apt install upgrade
// sudo apt install npm
// sudo apt install pip
// pip install yt-dlp

var networkInterfaces = os.networkInterfaces();
const host_ip = networkInterfaces['eth0'][0]['address']
host_address = `http://${host_ip}:3000`

console.log(`host_address: ${host_address}`)

var server = express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'media')))
  .get('/', async (req,res) => {
    res.send('Hello yt!')
  })
  .get('/status', async (req,res) => {
    try {
      console.log(`[status] req: ${req}`)
      console.log(`[status] req.params: ${req.params}`)

      res.json({
          "status" : 200,
          "response" : "okok"
      })
    } catch (err) {
      console.log("[/yt3 info] ERRTEST ... " + err)
      res.json({
        "status" : 500,
        "response" : "error " + err
    })
    }

  })
  .listen(PORT, () => console.log(`yt server listening on ${PORT}`))