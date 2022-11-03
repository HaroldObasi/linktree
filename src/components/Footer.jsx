import zuriLogo from "../assets/zuriLogo.svg";
import ingressive from "../assets/I4G.png";

const Footer = () => {
    return (
        <footer className="flex md:flex-row flex-col justify-between py-10 mt-[100px] lg:mx-[113px] mx-5 border-t-2">
            <img src={zuriLogo} alt="" className="md:w-[170px] w-[120px]" />
            <p className="text-gray-500 font-inter py-3 md">
                HNG Internship 9 Frontend Task
            </p>
            <img src={ingressive} alt="" className="md:w-[170px] w-[120px]" />
        </footer>
    );
};

export default Footer;
