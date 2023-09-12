/*
 * @Author: 陈红伟 chenhw2019@gmail.com
 * @Date: 2023-09-11 12:38:28
 * @LastEditors: 陈红伟 chenhw2019@gmail.com
 * @LastEditTime: 2023-09-12 09:01:49
 * @FilePath: /nest-my-site/src/modules/auth/auth.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable, Inject } from '@nestjs/common';
// const xml2js = require('xml2js');

import { RedisService } from '../../shared/services/redis.service';

@Injectable()
export class AuthService {
  constructor(private redisService: RedisService) {}

  saveTicket(xmlParams: any) {
    console.log(xmlParams.xml, 123, JSON.stringify(xmlParams.xml));
    this.redisService.set('88', JSON.stringify(xmlParams.xml), 12 * 60);
    return 'success';
  }
}
