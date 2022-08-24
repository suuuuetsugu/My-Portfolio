import express from "express";
import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { logger } from "../log/winston-setting";

export const router = Router();

const prisma = new PrismaClient()

// GET profiles
// TODO:今の利用者は自分だけなので不要、他者利用の可能性出てきた時に復活させる
// router.get('/', async(req: Request, res: Response, next: NextFunction) => {
//   logger.info('Info Get profiles start');
//   try {
//     const profiles = await prisma.profile.findMany();
//     res.json(profiles);
//   } catch (error) {
//     next(error);
//   }
//   logger.info('Info Get profiles end');
// });

// GET profile
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

// PATCH profile
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