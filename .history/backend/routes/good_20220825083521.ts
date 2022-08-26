import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { logger } from "../log/winston-setting";

export const router = Router();

const prisma = new PrismaClient()

// GET good
router.get('/', async(req: Request, res: Response, next: NextFunction) => {
  logger.info('Info Get good start');
  try {
    const good = await prisma.good.findMany();
    res.json(good);
  } catch (error) {
    next(error);
  }
  logger.info('Info Get good end');
});

// PATCH good
router.patch('/', async(req: Request, res: Response, next: NextFunction) => {
  logger.info('Info Patch good start');
  try {
    const good = await prisma.good.update({
      where: {
        id: 1,
      },
      data: req.body
    })
    res.json(good);
  } catch (error) {
    next(error)
  }
  logger.info('Info Patch good end');
});