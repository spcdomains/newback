import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/Signup.dto';
import { LoginDto } from './dto/Login.dto';
import { User } from './schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('all')
  getAllUsers(): Promise<User[]> {
    return this.authService.getAllUsers();
  }

  @Post('/signup')
  signup(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signup(signUpDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }
  @Delete('delete/Machine/:id') // Change the parameter to :id
  @UseGuards(AuthGuard('jwt'))
  async deleteById(
    @Param('id') id: string, // Change the parameter to id
    @Req() req
  ): Promise<void> {
    return this.authService.delete(id); // Use id to delete by ID
  }
 
}
