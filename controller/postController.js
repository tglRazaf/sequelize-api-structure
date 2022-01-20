



const {Post} = require('../models/post')
const {User} = require('../models')

class PostController{

    async createPost(req, res){
        const {userUUID, label} = req.body
        try {
            const user = await User.findOne({where: {uuid: userUUID}})
            await Post.creat({
                userId: user.id,
                label
            })
            res.json({
                message: 'Your post is added!!'
            })
        } catch (error) {
            res.json({
                message: error
            })
        }
    }

    async findAll(req, res){
        try {
            const posts = Post.findAll()
            res.json(posts)
        } catch (error) {
            res.json({
                message: error
            })
        }
    }
}

module.exports = new PostController()