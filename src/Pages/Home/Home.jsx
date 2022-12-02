import "./Home.css";

// Components
import Navbar from "../../Components/Navbar";
import Body from "../../Components/Body";
import Footer from "../../Components/Footer";

function Home() {
  return (
    <div
      style={{
        background: "#fff",
      }}
    >
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
