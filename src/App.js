import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const { kullanici } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              /* kullanıcı oturum açmışsa home sayfasına açmamışsa login sayfasına yönlendirecez. */
              element={kullanici ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!kullanici ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!kullanici ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
