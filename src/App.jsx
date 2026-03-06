import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TicketContainer from "./components/TicketContainer/TicketContainer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleTicketCardAdd = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  const handleTicketCardComplete = (ticketId) => {
    // Find the ticket
    const completedTicket = tickets.find((ticket) => ticket.id === ticketId);
    if (!completedTicket) return;

    // Remove from tickets (In-Progress)
    const remainingTickets = tickets.filter((ticket) => ticket.id !== ticketId);
    setTickets(remainingTickets);

    // Add to resolvedTickets
    setResolvedTickets([...resolvedTickets, completedTicket]);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#faf6f6] py-10">
        <div className="max-w-7xl mx-auto">
          <Banner tickets={tickets} resolvedTickets={resolvedTickets}></Banner>
          <TicketContainer
            tickets={tickets}
            handleTicketCardAdd={handleTicketCardAdd}
            handleTicketCardComplete={handleTicketCardComplete}
          ></TicketContainer>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
