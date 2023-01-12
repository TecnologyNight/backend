import { Router } from 'express'
import { createUser, getUser, updateUser, deleteUser } from '../controllers/userControllers';


const router = Router();

router.post('/save', createUser)
router.get('/get', getUser)
router.put('/update/:id', updateUser)
router.delete("/delete/:id", deleteUser);


// router.get('/users ', (req, res)=>{
//     res.send('hola  ')
// })


export default router; 