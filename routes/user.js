const express = require('express')
const router = express.Router()
const multer = require('multer')
const isAuth = require("../middleware/passport")
const controller = require('../controllers/userController')
//import validation 
const {registerRules,loginRules,Validation} = require('../middleware/authValidation')
const { validate } = require('../models/User')

//import Multer for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,`${__dirname}/../client/public/images` )
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    },
})
const uploadStorage = multer({ storage: storage })

router.post('/register',registerRules(),Validation, controller.register)
router.post('/login',loginRules(),Validation, controller.login)
router.get('/current',isAuth(), controller.current)
// router.put('/password/:user_id',controller.changePassword)
router.get('/',controller.getallUser)
router.get('/:user_id',controller.getUser)
router.put('/:user_id',uploadStorage.single('picture'),controller.updateUser)
router.delete('/:user_id',controller.deleteUser)

module.exports = router