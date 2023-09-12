/*
 * @Author: 陈红伟 chenhw2019@gmail.com
 * @Date: 2023-06-30 06:42:59
 * @LastEditors: 陈红伟 chenhw2019@gmail.com
 * @LastEditTime: 2023-09-12 08:21:59
 * @FilePath: /nest-my-site/src/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { GlobalSharedModule } from './shared/share.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisService } from './shared/services/redis.service';

@Module({
  imports: [
    AuthModule,
    GlobalSharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [ConfigService, RedisService],
  exports: [RedisService],
})
export class AppModule {}
