import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUseerDto } from './dtos/create-users.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dtos/update-user-dto';

@Controller('auth')
export class UsersController {
    constructor(private usersService:UsersService){}
    @Post('/signup')
    createUser(@Body() body:CreateUseerDto) {
        this.usersService.create(body.email,body.password)
    }
    @Get('/:id')
    findUser(@Param('id') id:string){
        return this.usersService.findOne(parseInt(id))
    }
    @Get()
    findAllUsers(@Query('email') email:string){
        return this.usersService.find(email)
    }    
    @Delete('/:id')
    removeUser(@Param('id') id:string){
        return this.usersService.remove(parseInt(id))
    }
    @Patch('/:id')
    updateUser(@Param('id') id:string, @Body() body:UpdateUserDto){
        return this.usersService.update(parseInt(id),body)

    }
}
