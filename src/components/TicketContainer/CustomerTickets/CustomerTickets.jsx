import { use } from "react";
import Ticket from "../Ticket/Ticket";

export default function CustomerTickets({ ticketData, handleTicketCardAdd }) {
  const tickets = use(ticketData); 
  return (
    <div>
      <h1 className="text-2xl font-semibold">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} handleTicketCardAdd={handleTicketCardAdd} />
        ))}
      </div>
    </div>
  );
}
