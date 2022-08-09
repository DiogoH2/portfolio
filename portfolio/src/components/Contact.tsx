
import '../styles/Page.css'

import imgTT from '../assets/img/twitter.png';
import imgInsta from '../assets/img/instagram.png';
import imglinkedin from '../assets/img/linkedin.png';


function Contact() {


    return (
        <div className={`
        flex flex-row    justify-between h-full
        bg-black p-24
    `}>
            <div className='flex flex-col'>
                <div className='pb-5'>
                    <p className='text-white'>Telefone:  (11) 96370-1994  </p>
                </div>
                <div>
                    <p className='text-white'>E-mail:  diogo12h91@gmail.com </p>
                </div>
            </div>
            <div className='flex fle-row justify-end'>
                <div>
                    <a href="https://twitter.com/lPositi_vity">
                        <img className='hover:animate-bounce' src={imgTT} alt="" width={50} height={50} />
                    </a>
                </div>
                <div className='px-2'>
                    <a href="https://www.instagram.com/diogo_hsc/">
                        <img className='hover:animate-bounce' src={imgInsta} alt="" width={50} height={50} />
                    </a>
                </div>
                <div className='pr-2'>
                    <a href="https://www.linkedin.com/in/diogo-henrique-6267231a5/">
                        <img className='hover:animate-bounce' src={imglinkedin} alt="" width={50} height={50} />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Contact