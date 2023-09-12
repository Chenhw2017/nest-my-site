/*
 * @Author: 陈红伟 chenhw2019@gmail.com
 * @Date: 2023-09-11 13:22:37
 * @LastEditors: 陈红伟 chenhw2019@gmail.com
 * @LastEditTime: 2023-09-12 08:32:12
 * @FilePath: /nest-my-site/src/middleware/xml/xml.middleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
@Injectable()
export class XmlMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('进入全局xml中间件...');
    // 获取express原生请求对象req,找到其请求头内容，如果包含application/xml，则执行转换
    if (
      req.headers['content-type'] &&
      req.headers['content-type'].includes('application/xml')
    ) {
      // 监听data方法获取到对应的参数数据(这里的方法是express的原生方法)
      req.on('data', (mreq) => {
        // 使用xml2js对xml数据进行转换
        parser.parseString(mreq, function (err, result) {
          // 将转换后的数据放入到请求对象的req中
          console.log('parseString转换后的数据', result);
          // 这里之后可以根据需要对result做一些补充完善
          req['body'] = result.xml;
        });
      });
    }
    next();
  }
}
