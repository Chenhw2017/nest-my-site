/*
 * @Author: 陈红伟 chenhw2019@gmail.com
 * @Date: 2023-09-12 07:28:00
 * @LastEditors: 陈红伟 chenhw2019@gmail.com
 * @LastEditTime: 2023-09-12 07:53:33
 * @FilePath: /nest-my-site/src/providers/redis.provider.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';

export type RedisClient = Redis;

@Injectable()
export class RedisService {
  protected redis: RedisClient;

  constructor(private configService: ConfigService) {
    this.redis = new Redis({
      host: this.configService.get('REDIS_HOST'),
      port: this.configService.get('REDIS_PORT'),
    });
  }
  set(key: string, value: string, expirationSeconds: number) {
    this.redis.set(key, value, 'EX', expirationSeconds);
  }

  get(key: string): Promise<string | null> {
    return this.redis.get(key);
  }
}
