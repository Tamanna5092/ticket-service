import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import TicketContainer from "./components/TicketContainer/TicketContainer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#faf6f6] py-10">
        <div className="max-w-7xl mx-auto">
          <Banner></Banner>
          <TicketContainer></TicketContainer>
        </div>
      </div>
    </>
  );
}

export default App;
