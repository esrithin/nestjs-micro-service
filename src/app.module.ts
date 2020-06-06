import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { MathController } from './math/math.controller';

@Module({
  imports: [],
  controllers: [AppController, CustomersController, MathController],
  providers: [AppService],
})
export class AppModule {}
