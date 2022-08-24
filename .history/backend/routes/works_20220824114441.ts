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

// POST profile
router.post('/', async(req: Request, res: Response, next: NextFunction) => {
    logger.info('Info Post task start');
    try {
      const profile = await prisma.profile.create({
        data: req.body,
      })
      res.json(profile);
    } catch (error) {
      next(error)
    }
    logger.info('Info Post task end');
  });

// DELETE profile
router.delete('/:id', async(req: Request, res: Response, next: NextFunction) => {
    logger.info('Info Delete profile start');
    try {
      const { id } = req.params
      const profileTask = await prisma.profile.delete({
        where: {
          id: Number(id),
        },
      })
      res.json(profileTask);
    } catch (error) {
      next(error)
    }
    logger.info('Info Delete profile end');
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