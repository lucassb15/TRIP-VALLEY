import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Footer(): JSX.Element {
    return (
        <footer className="text-gray-600 max-w-[1500px] py-5 px-5  gap-10 flex flex-row justify-center items-center w-auto border-t-2 mt-auto sm:gap-16 md:py-10 md:px-10 md:gap-32 lg:py-10 lg:px-10">

            <div className="flex flex-row md:w-max sm:w-max lg:w-max sm:gap-10 md:gap-14 lg:gap-24">
                <div>
                    <h1 className="lg:text-3xl font-black text-blue-600">TRIP<span className='text-gray-500'>valley</span>.</h1>
                </div>
            </div>
            <div className='flex w-auto  gap-5 sm:gap-10  md:gap-24 lg:gap-lg'>

                {/* TripValley infos */}
                <div className='sm:w-max md:w-max lg:w-max'>
                    <div className='mb-2'>
                        <h3 className='text-gray-800 font-semibold align-top'>TRIPvalley</h3>
                    </div>
                    <div className='space-y-2 cursor-pointer'>
                        <h4 className='text-sm'>Sobre nós</h4>
                        <h4 className='text-sm'>Seja um parceiro</h4>
                        <h4 className='text-sm'>Trabalhe conosco</h4>
                    </div>
                </div>
                {/* Contact */}
                <div className='sm:w-max md:w-max lg:w-max'>
                    <div className='mb-2'>
                        <h3 className='text-gray-800 font-semibold align-top'>Central de atendimento</h3>
                    </div>
                    <div className='space-y-2 cursor-pointer'>
                        <h4 className='text-sm'>(12) 9999-9999</h4>
                        <h4 className='text-sm'>(12) 9999-9999</h4>
                        <h4 className='text-sm'>contato@tripvalley.com.br</h4>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3  ">
                <a href="https://instagram.com" target={'_blank'} rel="noreferrer noopener">
                    <FaInstagram className='text-white text-2xl hover:text-black transition duration-300 ' />
                </a>
                <a href="https://facebook.com" target={'_blank'} rel="noreferrer noopener">
                    <FaFacebookF className='text-white text-2xl hover:text-black transition duration-300 ' />
                </a>
                <a href="https://facebook.com" target={'_blank'} rel="noreferrer noopener">
                    <FaTwitter className='text-white text-2xl hover:text-black transition duration-300 ' />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
