/*
 * @Author: 陈红伟 chenhw2019@gmail.com
 * @Date: 2023-09-11 12:38:28
 * @LastEditors: 陈红伟 chenhw2019@gmail.com
 * @LastEditTime: 2023-09-12 16:06:49
 * @FilePath: /nest-my-site/src/modules/auth/auth.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable, Inject } from '@nestjs/common';
// const xml2js = require('xml2js');

import { RedisService } from '../../shared/services/redis.service';

@Injectable()
export class AuthService {
  constructor(private redisService: RedisService) {}

  getAuthLink(): string {
    let ret: string;
    return ret;
  }
  saveTicket(xmlParams: any, url: string) {
    console.log(xmlParams, 123, JSON.stringify(xmlParams.xml));
    const str =
      '{"Encrypt":["\\n        LDFAmKFr7U/RMmwRbsR676wjym90byw7+hhh226e8bu6KVYy00HheIsVER4eMgz/VBtofSaeXXQBz6fVdkN2CzBUaTtjJeTCXEIDfTBNxpw/QRLGLq\\nqMZHA3I+JiBxrrSzd2yXuXst7TdkVgY4lZEHQcWk85x1niT79XLaWQog+OnBV31eZbXGPPv8dZciKqGo0meTYi+fkMEJdyS8OE7NjO79vpIyIw7hMBtEXPBK/tJGN5m5SoAS\\n6I4rRZ8Zl8umKxXqgr7N8ZOs6DB9tokpvSl9wT9T3E62rufaKP5EL1imJUd1pngxy09EP24O8Th4bCrdUcZpJio2l11vE6bWK2s5WrLuO0cKY2GP2unQ4fDxh0L4ePmNOVFJ\\nwp9Hyvd0BAsleXA4jWeOMw5nH3Vn49/Q/ZAQ2HN3dB0bMA+6KJYLvIzTz/Iz6vEjk8ZkK+AbhW5eldnyRDXP/OWfZH2P3WQZUwc/G/LGmS3ekqMwQThhS2Eg5t4yHv0mAIei\\n07Lknip8nnwgEeF4R9hOGutE9ETsGG4CP1LHTQ4fgYchOMfB3wANOjIt9xendbhHbu51Z4OKnA0F+MlgZomiqweT1v/+LUxcsFAZ1J+Vtt0FQXElDKg+YyQnRCiLl3I+GJ/c\\nxSj86XwClZC3NNhAkVU11SvxcXEYh9smckV/qRP2Acsvdls0UqZVWnPtzgx8hc8QBZaeH+JeiaPQD88frNvA== \\n    "],"MsgSignature":[""],"TimeStamp":["1411034505"],"Nonce":[""]}';
    this.redisService.set('xml', JSON.stringify(xmlParams), 12 * 60 * 60);
    this.redisService.set('url', url, 12 * 60 * 60);
    return 'success';
  }
}
