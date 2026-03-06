import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TicketContainer from "./components/TicketContainer/TicketContainer";
import { ToastContainer, toast } from "react-toastify";

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

    // Show toast notification
    toast.success(`"${completedTicket.title}" marked as complete!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Navbar></Navbar>
      <ToastContainer />

      <div className="bg-[#faf6f6] py-10">
        <div className="max-w-7xl mx-auto">
          <Banner tickets={tickets} resolvedTickets={resolvedTickets}></Banner>
          <TicketContainer
            tickets={tickets}
            handleTicketCardAdd={handleTicketCardAdd}
            handleTicketCardComplete={handleTicketCardComplete}
            resolvedTickets={resolvedTickets}
          ></TicketContainer>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
