import Header from "../components/Header";
import LoginMain from "../components/Login/LoginMain";

function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
     <LoginMain />
    </div>
  );
}

export default Home;
