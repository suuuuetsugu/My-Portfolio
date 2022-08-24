import express from "express";
const router = express.Router();
import { PrismaClient } from "@prisma/client";
// import logger from "../logs/winston-setting";

const prisma = new PrismaClient()

// GET profile
router.get('/', async(req, res, next) => {
  logger.info('Info Get profile start');
  try {
    const profile = await prisma.profile.findMany();
    res.json(profile);
  } catch (error) {
    next(error);
  }
  logger.info('Info Get profile end');
});


module.exports = router;