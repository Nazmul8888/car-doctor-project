import { Outlet } from "react-router-dom";
import Footer from "../SharedPage/Fotter/Footer";
import NavBar from "../SharedPage/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;