import { Controller, Post, Body, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { promptDto } from './dto/prompt.dot';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }


  @HttpCode(HttpStatus.OK,)
  @Post('generate-text')
  async generateText(@Body() body: promptDto) {
    return this.appService.getdata(body.prompt)
  }
}