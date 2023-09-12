/*
 * @Author: 陈红伟 chenhw2019@gmail.com
 * @Date: 2023-09-11 12:38:28
 * @LastEditors: 陈红伟 chenhw2019@gmail.com
 * @LastEditTime: 2023-09-12 08:54:07
 * @FilePath: /nest-my-site/src/modules/auth/auth.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { XmlMiddleware } from '../../middleware/xml/xml.middleware';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
// export class AuthModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(XmlMiddleware).forRoutes('wx/callback');
//   }
// }
