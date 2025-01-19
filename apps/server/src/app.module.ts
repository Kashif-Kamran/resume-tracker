import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import dbConfig from 'src/database/db.config';
import { UserModule } from './services/user/user.module';
import { AuthModule } from './services/auth/auth.module';
import { UserController } from './services/user/user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [dbConfig],
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
  ],
  controllers: [UserController],
})
export class AppModule {}
