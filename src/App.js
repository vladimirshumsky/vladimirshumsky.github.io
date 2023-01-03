import "./App.css";
import Header from "./components/pages/common/Header/Header";
import LoginPage from "./components/pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/registration/RegistrationPage";
import NotMailPage from "@/pages/notMail/notMailPage";
import ConfirmPages from "@/pages/confirm/ConfirmPages";
import ForgotPasswordPage from "@/pages/forgotPassword/ForgotPasswordPage";
import SuccessSendPage from "@/pages/successEmailSend/SuccessSendPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
        <Route path="/confirm" element={<ConfirmPages />}></Route>
        <Route path="/not_mail" element={<NotMailPage />}></Route>
        <Route path="/forgot" element={<ForgotPasswordPage />}></Route>
        <Route path="/email_send" element={<SuccessSendPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
