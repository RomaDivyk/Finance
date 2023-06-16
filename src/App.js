import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/pages/Home.js";
import LogInPage from "./components/pages/LogIn.js";
import NotFound from "./components/pages/NotFound.js";
import RegistrationPage from "./components/pages/Registration.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<LogInPage />}></Route>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
