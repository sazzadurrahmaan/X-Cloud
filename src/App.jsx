import Header from "./components/Header";
import Footer from "./components/Footer";
import ChooseProvider from "./pageComponents/ChooseProvider";
import CreateBlueprint from "./PageComponents/CreateBluePrint";


const App = () => {
  return (
    <>
      <div className="bg-[#171A30]">
        <Header />
        {/* <ChooseProvider /> */}
        <CreateBlueprint />
        <Footer />
      </div>
    </>
  );
};

export default App;