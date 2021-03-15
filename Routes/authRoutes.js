const { Router } = require('express')
const router     = Router()

// Auth Controller
const authController = require('../Controllers/authControllers.js')
router.post('/signup', authController.signup_post)
router.post('/login',  authController.login_post)

module.exports = router