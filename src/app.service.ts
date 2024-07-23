import { GoogleGenerativeAI } from '@google/generative-ai';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private genAI: any;
  private ModelGenAi: any;

  constructor(private configService: ConfigService) {
    this.genAI = new GoogleGenerativeAI(this.configService.get('API_KEY'));
    this.ModelGenAi = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  async getdata(prompt: string): Promise<string> {

    try {
      const result = await this.ModelGenAi.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text
    } catch (error) {
      throw new BadRequestException()
    }
  }
}