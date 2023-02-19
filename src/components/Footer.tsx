import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-6 px-6 flex justify-between items-center">
            <div className="container flex-col  gap-5">
                <div>
                    <h1 className="font-medium text-xl">TRIPvalley.</h1>
                </div>
                <div>
                    <p>&copy; {new Date().getFullYear()} Trip Valley. Todos os direitos reservados.</p>
                </div>
            </div>
            <div className="container flex flex-row gap-5 text-white text-2xl ">
                <a href="https://instagram.com" target={'_blank'}>
                    <FaInstagram className=' hover:text-black transition duration-300 ' />
                </a>
                <a href="https://facebook.com" target={'_blank'}>
                    <FaFacebookF className=' hover:text-black transition duration-300 ' />
                </a>
                <a href="https://facebook.com" target={'_blank'}>
                    <FaTwitter className=' hover:text-black transition duration-300 ' />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
