import { Router } from "express";

export const router = Router();

/* GET home page. */
router.get('/', function(req: any, res: any, next: any) {
  res.render('index', { title: 'テスト' });
});

module.exports = router;
