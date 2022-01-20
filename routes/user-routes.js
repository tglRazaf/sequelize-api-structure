



const router = require('express').Router()
const UserController = require('../controller/userController.js')

router.get('/message/hello', (req, res)=>{
    res.json({
        message: 'hello world'
    })
})

//console.log('UserController', UserController);

router.post('/user/create', UserController.createUser)
router.get('/users/list', UserController.findAll)

module.exports= router