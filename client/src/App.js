import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.loading);

  return (
    <div>
      <HashRouter>
        <NavBar />
        {loading && <Loading />}

        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
