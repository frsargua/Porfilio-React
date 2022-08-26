import "./App.css";
import ButtonAppBar from "./components/navbar";
import PortfolioContainer from "./components/porfolioContainer";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <PortfolioContainer></PortfolioContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
