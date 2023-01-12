import cors from 'cors'
import express  from 'express';
import userRoutes from './routes/user.routes';
import influencerRoutes from './routes/influncer.routes';
import servicioRoutes from './routes/services.routes';

const app = express();

app.use(cors())
app.use(express.json())
app.use('/user',userRoutes);
app.use('/influencer',influencerRoutes);
app.use('/servicio',servicioRoutes);

export default app;