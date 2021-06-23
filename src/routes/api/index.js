import { Router } from 'express';
import driverRoute from './driverRoute';
import tripRoute from './tripRoute';
import riderRoute from './riderRoute';

const router = Router();

router.use('/drivers', driverRoute);
router.use('/trips', tripRoute);
router.use('/riders', riderRoute);

export default router;
