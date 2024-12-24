import ChooseProvider from "./ChooseProvider";
import Footer from "./Footer";
import Header from "./Header";


const Page = () => {
    return (
        <div className="bg-[#171A30]">
            <Header />
            <ChooseProvider />
            <Footer />
        </div>
    );
};

export default Page;