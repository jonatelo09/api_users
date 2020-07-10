const User = require('../models/users')

/**
 * @param {*} newUserData
 */

function create(newUserData) {
    return User.create(newUserData)
}

function update(newUserData) {
    //
}



module.exports = {
    create
}