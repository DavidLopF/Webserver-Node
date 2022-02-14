const { response } = require('express');

const getUser = (req, res = response) => {
    res.json({ message: 'get Api- from controller' })
}

const postUser = (req, res = response) => {
    res.json({ message: 'post Api- from controller' })
}

const putUser = (req, res = response) => {
    res.json({ message: 'put Api- from controller' })
}

const deleteUser = (req, res = response) => {
    res.json({ message: 'delete Api- from controller' })
}




module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}