import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Faq from "../../components/Faq/Faq";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Speciality from "../Speciality/Speciality";


const HomePage = () => {
    return (
        <div>

            
            <Banner></Banner>
            <Categories></Categories>
            <About></About>
            <Speciality></Speciality>
            <Faq></Faq>
            <ContactUs></ContactUs>



        </div>
    );
};

export default HomePage;