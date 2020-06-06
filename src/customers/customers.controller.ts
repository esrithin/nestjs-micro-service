import { Controller, Get, Post, Req ,Query} from '@nestjs/common';
import { Request ,} from 'express';

@Controller('customers')
export class CustomersController {
    @Post()
    create(): string {
        return 'This action adds a new cat';
    }
    @Get()
    findAll(@Query() name: string): string {
        console.log("==========>>>",name)
        return name
        return "return list of customers";
    }
    // @Get('profile')
    // findAll(): string {
    //     return 'profile data'
    // }

    
}
