import { Module } from '@nestjs/common'
import { SpotsModule } from './spots/spots.module'
import { EventsModule } from './events/events.module'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from '@app/core/prisma/prisma.module'
import { AuthModule } from '@app/core/auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.partner1', isGlobal: true }),
    AuthModule,
    PrismaModule,
    EventsModule,
    SpotsModule,
  ],
})
export class Partner1Module {}
