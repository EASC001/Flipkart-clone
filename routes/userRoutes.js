import express from "express"
import { LoginUser, Profile, Registeruser, UpdateProfile, verifyuser} from "../controller/userControl.js"

const router = express.Router();
router.post('/user/registration',Registeruser);
router.post('/user/signup',verifyuser)
router.post('/user/login/:id',LoginUser)
router.get('/user/:id',Profile)
router.put('/user/:id',UpdateProfile)
// router.post('/user/email',emailverify)
// router.post('/user/number',numberverify)


export default router;
