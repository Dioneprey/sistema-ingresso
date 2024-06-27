import { NestFactory } from '@nestjs/core'
import { Partner1Module } from './partner1.module'

async function bootstrap() {
  const app = await NestFactory.create(Partner1Module)
  await app.listen(3000).then(() => {
    console.log('Partner1 - Running on port: ', 3000)
  })
}
bootstrap()
