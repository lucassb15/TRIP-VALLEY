import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-10 px-10 grid grid-cols-2 space-x-20 justify-between items-center w-full md:space-x-64">

            <div className="grid w-full">
                <div>
                    <h1 className="font-medium text-xl">TRIP<span className='text-black'>valley</span>.</h1>
                </div>
                <div>
                    <p>&copy; {new Date().getFullYear()} Trip Valley. Todos os direitos reservados.</p>
                </div>
            </div>
            <div className="grid grid-cols-3  ">
                <a href="https://instagram.com" target={'_blank'}>
                    <FaInstagram className='text-white text-2xl hover:text-black transition duration-300 ' />
                </a>
                <a href="https://facebook.com" target={'_blank'}>
                    <FaFacebookF className='text-white text-2xl hover:text-black transition duration-300 ' />
                </a>
                <a href="https://facebook.com" target={'_blank'}>
                    <FaTwitter className='text-white text-2xl hover:text-black transition duration-300 ' />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
