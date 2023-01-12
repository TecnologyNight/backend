import { Router } from 'express'
import { createInfluencer, getTodosInfluencer, updateInfluencer, deleteInfluencer, habilitadoInfluencer, desabilitadoInfluencer} from '../controllers/influencerController';


const router = Router();

router.post('/saveInf', createInfluencer)
router.get('/getInf', getTodosInfluencer)
router.put('/updateInf/:id', updateInfluencer)
router.delete("/deleteInf/:id", deleteInfluencer);
router.post("/addFavorite/:id", habilitadoInfluencer);
router.post("/removeFavorite/:id", desabilitadoInfluencer);


export default router;