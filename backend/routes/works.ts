import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { logger } from "../log/winston-setting";

export const router = Router();

const prisma = new PrismaClient()

// GET works
router.get('/', async(req: Request, res: Response, next: NextFunction) => {
  logger.info('Info Get works start');
  try {
    const works = await prisma.work.findMany();
    res.json(works);
  } catch (error) {
    next(error);
  }
  logger.info('Info Get works end');
});

// GET work
router.get('/:id', async(req: Request, res: Response, next: NextFunction) => {
    logger.info('Info Get work start');
    try {
      const work = await prisma.work.findMany();
      res.json(work);
    } catch (error) {
      next(error);
    }
    logger.info('Info Get work end');
  });

// POST work
router.post('/', async(req: Request, res: Response, next: NextFunction) => {
    logger.info('Info Post work start');
    try {
      const work = await prisma.work.create({
        data: req.body,
      })
      res.json(work);
    } catch (error) {
      next(error)
    }
    logger.info('Info Post work end');
  });

// DELETE work
router.delete('/:id', async(req: Request, res: Response, next: NextFunction) => {
    logger.info('Info Delete work start');
    try {
      const { id } = req.params
      const deleteWork = await prisma.work.delete({
        where: {
          id: Number(id),
        },
      })
      res.json(deleteWork);
    } catch (error) {
      next(error)
    }
    logger.info('Info Delete work end');
  });

// PATCH work
router.patch('/:id', async(req: Request, res: Response, next: NextFunction) => {
    logger.info('Info Patch work start');
    try {
      const { id } = req.params
      const work = await prisma.work.update({
        where: {
          id: Number(id),
        },
        data: req.body
      })
      res.json(work);
    } catch (error) {
      next(error)
    }
    logger.info('Info Patch work end');
  });