import express from "express";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { logger } from "../log/winston-setting";

export const router = Router();

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