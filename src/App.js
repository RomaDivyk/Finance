import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import Home from "./components/pages/Home.js";
import LogInPage from "./components/pages/LogIn.js";
import NotFound from "./components/pages/NotFound.js";
import RegistrationPage from "./components/pages/Registration.js";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <main>
          <Sidebar />

          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<LogInPage />}></Route>
            <Route path="/registration" element={<RegistrationPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
