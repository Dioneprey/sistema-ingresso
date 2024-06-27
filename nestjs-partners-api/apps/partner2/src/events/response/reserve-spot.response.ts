import { Spot, Ticket } from '@prisma/client'

type TicketWithSpots = Ticket & { spot: Spot }

export class ReservarLugarResponse {
  constructor(readonly tickets: TicketWithSpots[]) {}

  toJSON() {
    return this.tickets.map((ticket) => ({
      id: ticket.id,
      email: ticket.email,
      lugar: ticket.spot.name,
      tipo_ingresso: ticket.ticketKind,
      estado: ticket.spot.status,
      evento_id: ticket.spot.eventId,
    }))
  }
}
