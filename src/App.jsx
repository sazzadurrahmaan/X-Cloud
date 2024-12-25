import Header from "./components/Header";
import Footer from "./components/Footer";
import ChooseProvider from "./pageComponents/ChooseProvider";
import CreateBlueprint from "./PageComponents/CreateBluePrint";
import AllBluePrints from "./pageComponents/AllBluePrints";


const App = () => {
  return (
    <>
      <div className="bg-[#171A30]">
        <Header />
        {/* <ChooseProvider /> */}
        {/* <CreateBlueprint /> */}
        <AllBluePrints />
        <Footer />
      </div>
    </>
  );
};

export default App;