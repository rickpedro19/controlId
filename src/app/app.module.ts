import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { ConsultaModule } from './modules/consulta/consulta.module';
import { join } from 'path';
import { PrismaService } from './modules/prismaService/prisma.service';
import { SeniorModule } from './senior/senior.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    ConsultaModule,
    SeniorModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
