import React, { Suspense } from "react";
import CustomerTickets from "./CustomerTickets/CustomerTickets";
import TaskStatus from "./TaskStatus/TaskStatus";

const TicketData = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};

export default function TicketContainer({ tickets, handleTicketCardAdd, handleTicketCardComplete }) {
  const ticketData = TicketData();

  return (
    <div className="grid gird-col md:grid-cols-4 gap-6 mt-10">
      <div className="md:col-span-3">
        <Suspense fallback={<div>Loading...</div>}>
          <CustomerTickets
            ticketData={ticketData}
            handleTicketCardAdd={handleTicketCardAdd}
          ></CustomerTickets>
        </Suspense>
      </div>
      <div className="md:col-span-1">
        <TaskStatus tickets={tickets} handleTicketCardComplete={handleTicketCardComplete}></TaskStatus>
      </div>
    </div>
  );
}
