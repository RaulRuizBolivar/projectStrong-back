import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { WorkOutModule } from './work-out/work-out.module';
import { RoutineModule } from './routine/routine.module';
import { ExerciceModule } from './exercice/exercice.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/ProjectStrong'),
    UserModule,
    WorkOutModule,
    RoutineModule,
    ExerciceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
