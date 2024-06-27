import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common'
import { EventsService } from '@app/core/events/events.service'
import { CreateEventRequest } from './request/create-event.request'
import { UpdateEventRequest } from './request/update-event.request'
import { ReserveSpotRequest } from './request/reserve-spot.request'
import { AuthGuard } from '@app/core/auth/auth.guard'
import { TicketKind } from '@prisma/client'
import { ReserveSpotResponse } from 'apps/partner1/src/events/response/reserve-spot.response'

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventRequest: CreateEventRequest) {
    return this.eventsService.create({
      name: createEventRequest.nome,
      description: createEventRequest.descricao,
      date: createEventRequest.data,
      price: createEventRequest.preco,
    })
  }

  @Get()
  findAll() {
    return this.eventsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventRequest: UpdateEventRequest,
  ) {
    return this.eventsService.update(id, {
      name: updateEventRequest.nome,
      description: updateEventRequest.descricao,
      date: updateEventRequest.data,
      price: updateEventRequest.preco,
    })
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id)
  }

  @UseGuards(AuthGuard)
  @Post(':id/reserve')
  async reserveSpots(
    @Body() request: ReserveSpotRequest,
    @Param('id') eventId: string,
  ) {
    const tickets = await this.eventsService.reserveSpot({
      eventId,
      spots: request.lugares,
      ticketKind:
        request.tipo_ingresso === 'inteira' ? TicketKind.full : TicketKind.half,
      email: request.email,
    })
    return new ReserveSpotResponse(tickets)
  }
}
