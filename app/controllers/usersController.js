const _ = require('lodash')
const DB = require("../models")

const UsersController = {
  index:async (ctx) => {
    DB.User.findAll().then(users => {
      console.log(users)
    })
    ctx.body = {
      name:'哈哈哈哈'
    }
  }
}
module.exports = UsersController