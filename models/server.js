const express = require('express')
const corse = require('cors')


class Server {

    constructor() {
        this.port = process.env.PORT
        this.app = express()
        this.userRoutes = '/api/user'
        this.routes()
    }

    routes() {
        //
        this.app.use(this.userRoutes, require('../routes/users'))

        this.app.get('*', (req, res) => {
                res.send('404')
            }) // * means any route
    }

    middlewares() {

        //CORS
        this.app.use(corse())

    }

    laucher() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        })
    }


}

module.exports = Server;