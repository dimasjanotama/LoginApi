var express = require('express')
var router = express.Router()
const { authController } = require('../1.controllers')
const { gettoken, verifytoken } = require('../3.helpers/jwt')

//endpoint ini ditaruh setelah user berhasil login, setelah itu dari front end menyimpan token di dalam localstorage 
router.post('/gettoken', gettoken)

//endpoint ini ditaruh disemua component yang perlu diberi token, ditaruh di component did mount, sebelum page di render 
router.post('/verifytoken', verifytoken)

//endpoint ini ditaruh didalam function login, setelah semua data state berhasil diperoleh 
router.get('/login', authController.login)

module.exports = router