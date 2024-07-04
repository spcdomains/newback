import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DataModule } from './data/data.module';
import { AuthModule } from './auth/auth.module';
// import { CategoryModule } from './category/category.module';
// import { CarouselModule } from './carousel/carousel.module';
// import { BannerModule } from './bannerhead/Banner.module';
import { CacheModule } from '@nestjs/cache-manager'; // Correct import statement
// import { CategoryModule } from './category/category.module';
// import { CustomerModule } from './customer/customer.module';
// import { FormModule } from './form/form.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    // MongooseModule.forRoot(process.env.DB_URL),
    DataModule,
    // CategoryModule,
    AuthModule,
    // CustomerModule,
    // CarouselModule,
    // BannerModule,
    // FormModule,
    CacheModule.register(), // Register CacheModule with default options
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
