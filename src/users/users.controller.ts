import { Body, Controller, Post } from '@nestjs/common';
import { CreateUseerDto } from './dtos/create-users.dto';

@Controller('auth')
export class UsersController {
    @Post('/signup')
    createUser(@Body() boyd:CreateUseerDto) {
        console.log(boyd);
    }
    
}
