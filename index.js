const app = require('./src/server')
require('dotenv').config()

const db = require('./src/lib/db')

async function start() {
    await db.connect()
    console.log('Conected database')
    app.listen(4000, () => {
        console.log('Server listen in port: 4000')
    })
}
start()
    .then(() => console.log('All Done'))
    .catch((err => console.log(err)))