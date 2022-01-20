const router = require('express').Router()
const PostController = require('../controller/postController')

router.post('/create/post', PostController.createPost)
router.get('/posts/list', PostController.findAll)