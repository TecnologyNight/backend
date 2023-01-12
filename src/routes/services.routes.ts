import { Router } from 'express'
import { createServices, getAllServices, updateServices, deleteServices } from '../controllers/servicesController';


const router = Router();

router.post('/saveSer', createServices)
router.get('/getSer', getAllServices)
router.put('/updateSer/:id', updateServices)
router.delete("/deleteSer/:id", deleteServices);


export default router;