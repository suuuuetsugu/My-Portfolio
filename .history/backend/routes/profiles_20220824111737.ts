import express from "express";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { logger } from "../log/winston-setting";

export const router = Router();

const prisma = new PrismaClient()

// GET profiles
router.get('/', async(req, res, next) => {
  logger.info('Info Get profiles start');
  try {
    const profiles = await prisma.profile.findMany();
    res.json(profiles);
  } catch (error) {
    next(error);
  }
  logger.info('Info Get profiles end');
});

// GET profile
router.get('/:id', async(req, res, next) => {
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
router.patch('/:id', async(req, res, next) => {
    logger.info('Info Patch profile start');
    try {
      const { id } = req.params
      const profile = await prisma.profile.update({
        where: {
          id: Number(id),
        },
        data: req.body,
      })
      res.json(profile);
    } catch (error) {
      next(error)
    }
    logger.info('Info Patch profile end');
  });