import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  RegistrationForm,
  LoginForm,
  Dashboard,
  UserProfile,
} from "./Components/_index";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/me" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
