import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../screens/admin";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Protected from "../screens/protected";
import ScreteKey from "../screens/scretkey";
import Quiz from "../screens/quiz";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Protected Screen={Admin} />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="scretkey" element={<ScreteKey />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
}
