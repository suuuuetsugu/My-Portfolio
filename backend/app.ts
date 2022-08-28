import createHttpError from "http-errors";
import express from "express";
import { Request, Response, NextFunction } from "express";
import path from "path";
// import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import fs from "fs";
// import logger from "morgan";

// TODO:不要なミドルウェアはアンインストール、コメントアウト部分を最後に削除する

const upload = multer({ dest: "upload/" }) // ファイルのアップロード先を指定

import { router as indexRouter } from "./routes/index";
import { router as profilesRouter } from "./routes/profiles";
import { router as worksRouter } from "./routes/works";
import { router as goodRouter } from "./routes/good";

const app = express();

// view engine setup
app.set('views', path.join('views'));
app.set('view engine', 'jade');

// これは後からworkのAPIに追加が必要
// app.get('/test', (req, res) => {
//   console.log(req.file, req.body)
//   res.send("🤗")
// })

app.use(cors());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join('public')));

app.use('/', indexRouter);
app.use('/profiles', profilesRouter);
app.use('/works', worksRouter);
app.use('/good', goodRouter);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createHttpError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
