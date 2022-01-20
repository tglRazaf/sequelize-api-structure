



//const {User} = require('../models')
const {User} = require('../models')

class UserController{

    async createUser(req, res) {
        let {name, number, date} = req.body
        try {
            await User.create({
                name: name,
                number: number,
                date: date
            })
            res.json({
                message: 'User is created succefully!!'
            }) 
        } catch (error) {
            res.json({
                message: error
            })
        }
    }

    async findAll(req, res){
        try {
            const users = await User.findAll()
            res.json(users)
        } catch (error) {
            res.json({
                message: error
            })
        }
    }
}


module.exports = new UserController()