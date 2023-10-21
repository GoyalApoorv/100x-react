import Login from "./pages/login/Login";
import Header from "./components/Header";
import CreateAccountStep1 from "./pages/login/CreateAccountStep1";
import CreateAccountStep2 from "./pages/login/CreateAccountStep2";
import CreateAccountStep3 from "./pages/login/CreateAccountStep3";

export default function App() {
  return (
    <div className="bg-neutral-1000">
      {/* <Login></Login>
      <CreateAccountStep1 />
      <CreateAccountStep2 /> */}
      <CreateAccountStep3 />
    </div>
  );
}
