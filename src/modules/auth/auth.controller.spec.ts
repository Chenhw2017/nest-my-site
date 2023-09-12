/*
 * @Author: 陈红伟 chenhw2019@gmail.com
 * @Date: 2023-09-11 12:38:28
 * @LastEditors: 陈红伟 chenhw2019@gmail.com
 * @LastEditTime: 2023-09-11 12:47:21
 * @FilePath: /nest-my-site/src/modules/auth/auth.controller.spec.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AppController', () => {
  let AuthController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    appController = app.get<AuthController>(AuthController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(AuthController.getHello()).toBe('Hello World!');
    });
  });
});
