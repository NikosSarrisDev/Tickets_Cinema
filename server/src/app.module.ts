import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { MoviesModule } from './movies/movies.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://nikolaossarrisnode:ZMkQEEgy5wfUISOb@cluster0.u04qbkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"), MoviesModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// mongodb+srv://nikolaossarrisnode:ZMkQEEgy5wfUISOb@cluster0.u04qbkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
