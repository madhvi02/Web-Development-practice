const express=require('express');
const user_controller=require('../controllers/user_controller');
const router=express.Router();

router.get('/',user_controller.profile);
router.get('/profile',user_controller.profile);
router.get('/edit',user_controller.profile);
module.exports =router;