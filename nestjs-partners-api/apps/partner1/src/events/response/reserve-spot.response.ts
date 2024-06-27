import { Spot, Ticket } from '@prisma/client'

type TicketWithSpots = Ticket & { spot: Spot }

export class ReserveSpotResponse {
  constructor(readonly tickets: TicketWithSpots[]) {}

  toJSON() {
    return this.tickets.map((ticket) => ({
      id: ticket.id,
      email: ticket.email,
      spot: ticket.spot.name,
      ticket_kind: ticket.ticketKind,
      status: ticket.spot.status,
      event_id: ticket.spot.eventId,
    }))
  }
}
