import React from "react";

export default function TaskStatus({
  tickets,
  handleTicketCardComplete,
  resolvedTickets,
}) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Task Status</h1>
      <div className="mt-6">
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            // status 1: ticket added to task status
            <div key={ticket.id} className="card bg-base-100 shadow-md mb-6">
              <div className="card-body">
                <h2 className="text-lg text-[#001931] font-medium">
                  {ticket.title}
                </h2>
                <div className="mt-4">
                  <button
                    onClick={() => handleTicketCardComplete(ticket.id)}
                    className="btn w-full bg-[#02A53B] font-semibold text-white"
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          // status 2: no ticket added yet
          <div>
            <p className="text-[#627382]">
              Select a ticket to add to Task Status
            </p>
          </div>
        )}
        {/* status 3 */}
        <div className="mt-6">
          <h1 className="text-2xl font-semibold mb-4">Resolved Task</h1>
          {resolvedTickets.length > 0 ? (
            resolvedTickets.map((ticket) => (
              <h2
                key={ticket.id}
                className="text-lg text-[#001931] font-medium px-4 py-5 bg-[#E0E7FF] shadow mb-4"
              >
                {ticket.title}
              </h2>
            ))
          ) : (
            <p className="text-[#627382]">No resolved tasks yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
