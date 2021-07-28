import * as express from "express";
import chirpsRouter from "./chirps";
import db from '../db';

const router = express.Router();

//app.use will not work - throws "cannot GET error"
router.use('/chirps', chirpsRouter)

router.get('/api/chirprapp', async (req, res) => {
  try {
    res.json(await db.Chirprapp.all());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router