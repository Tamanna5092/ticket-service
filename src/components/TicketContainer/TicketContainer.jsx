import React, { Suspense, useState } from "react";
import CustomerTickets from "./CustomerTickets/CustomerTickets";
import TaskStatus from "./TaskStatus/TaskStatus";

const TicketData = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};

export default function TicketContainer() {
    const [tickets, setTickets] = useState([]);
    console.log("tickets", tickets);
  const ticketData = TicketData();

  const handleTicketCardAdd = (ticket) => {
    console.log("Ticket card clicked", ticket);
    setTickets([...tickets, ticket]);
  };


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
        <TaskStatus tickets={tickets}></TaskStatus>
      </div>
    </div>
  );
}
