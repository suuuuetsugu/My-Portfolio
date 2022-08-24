import express from "express";
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
    const works = await prisma.profile.findMany();
    res.json(works);
  } catch (error) {
    next(error);
  }
  logger.info('Info Get works end');
});

// GET work
router.get('/:id', async(req: Request, res: Response, next: NextFunction) => {
    logger.info('Info Get profile start');
    try {
      const profile = await prisma.profile.findMany();
      res.json(profile);
    } catch (error) {
      next(error);
    }
    logger.info('Info Get profile end');
  });

// PATCH work
router.patch('/:id', async(req: Request, res: Response, next: NextFunction) => {
    logger.info('Info Patch profile start');
    try {
      const { id } = req.params
      const profile = await prisma.profile.update({
        where: {
          id: Number(id),
        },
        data: req.body
      })
      res.json(profile);
    } catch (error) {
      next(error)
    }
    logger.info('Info Patch profile end');
  });