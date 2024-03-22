import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { readdir } from 'fs/promises';
import { resolve } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async get() {
    const files = await readdir(resolve(__dirname, '../wallpaper'));
    const url =
      'http://localhost:3000/wallpaper/' +
      files[Math.floor(Math.random() * files.length - 1)];
    return url;
  }
}
