
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import TopNavbarMenu from "./Components/TopNavbarMenu";
import WithSubnavigation from "./Components/MainNavbar";

import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <TopNavbarMenu />
      <WithSubnavigation />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
