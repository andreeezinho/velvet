import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.jsx";

import Navbar from "./layout/Navbar.jsx";
import Container from "./layout/Container.jsx";
import Footer from "./layout/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

          <Container customClass="min-height">
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Container>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
