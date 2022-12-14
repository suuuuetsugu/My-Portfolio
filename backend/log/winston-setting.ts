import winston from 'winston';
const format = winston.format;

// タイムゾーンの設定
const timezoned = () => {
    return new Date().toLocaleString('ja-jp', {
        timeZone: 'Asia/Tokyo'
    });
}

// 出力フォーマットの設定
export const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: timezoned }),
        format.cli(),
        format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)
    ),
    // 出力先
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'log/all.log' }),
    ]
});