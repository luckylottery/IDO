import Header from "../header/index";
import Footer from "../footer/index";
const MainLayout = ({ children }) => {
    return <div className="w-full min-h-screen">
        <Header />
        {children}
        <Footer />
    </div>;
};
export default MainLayout;