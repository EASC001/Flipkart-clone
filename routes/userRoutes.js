import express from "express"
import { LoginUser, Profile, Registeruser, UpdateProfile, verifyOtp, verifyuser} from "../controller/userControl.js"

const router = express.Router();
router.post('/registration',Registeruser);
router.post('/signup',verifyuser)
router.post('/login',LoginUser)
router.post('/verify',verifyOtp)
router.get('/:id',Profile)
router.put('/:id',UpdateProfile)
// router.post('/user/email',emailverify)
// router.post('/user/number',numberverify)


export default router;
