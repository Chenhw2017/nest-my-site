/*
 * @Author: 陈红伟 chenhw2019@gmail.com
 * @Date: 2023-06-30 06:42:59
 * @LastEditors: 陈红伟 chenhw2019@gmail.com
 * @LastEditTime: 2023-09-12 08:23:14
 * @FilePath: /nest-my-site/src/app.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('wx')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('callback')
  getHello(@Body() wxCallBackPayload: any): string {
    return this.authService.saveTicket(wxCallBackPayload);
  }
}
