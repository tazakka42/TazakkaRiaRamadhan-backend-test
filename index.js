require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.APP_PORT

const db = require('./db')


app.get('/', async (req, res) => {
    try {
        const rows = await db.query(`SELECT pendidikan.id_murid ,murid.name ,pendidikan.status AS pendidikan_terakhir, murid.time_create, pendidikan.time_create AS time_update
            FROM pendidikan INNER JOIN murid ON pendidikan.id_murid = murid.id WHERE pendidikan.id IN (
            SELECT MAX(pendidikan.id)
            FROM pendidikan 
            GROUP BY pendidikan.id_murid 
            )`);
            
        res.send(JSON.stringify(rows))
    } catch (error) {
    res.status(500).send({
        "error": "ERROR",
        "status": 500
    })
    }
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})