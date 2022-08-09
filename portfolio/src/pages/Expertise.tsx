import Layout from "../components/Layout"
import '../styles/Page.css'
import imgCode from '../assets/img/code.png';
import imgHtml from '../assets/img/html.png';
import imgCss from '../assets/img/css.png';
import imgJs from '../assets/img/js.png';
import imgReact from '../assets/img/react.png';
import imgTail from '../assets/img/tailwind.png';
import imgPower from '../assets/img/powerpoint.png';
import imgWord from '../assets/img/Word.png';
import imgExcel from '../assets/img/exccel.png';
import Contact from "../components/Contact";
import SubTitulo from "../components/SubTitulo";
import Nav from "../components/Nav";

function Expertise() {


    return (
        <>
            <Nav />
            <div className={`
        flex  justify-center items-center
        bg-hero-pattern w-full  sm:h-full md:h-full
        text-white bg-no-repeat bg-cover 
    `}>
                <Layout titulo="Expertise">
                    <div className=" flex flex-row justify-between items-center p-20 sm:flex-col">
                        <img className="hover:animate-spin" src={imgPower} alt="" width={100} height={100} />
                        <img className="hover:animate-spin" src={imgWord} alt="" width={100} height={100} />
                        <img className="hover:animate-spin" src={imgExcel} alt="" width={100} height={100} />
                    </div>
                    <SubTitulo>Linguagens: </SubTitulo>
                    <div className="flex flex-col justify-center items-center py-32">
                        <img src={imgCode} alt="" width={100} height={100} />
                    </div>
                    <div className=" flex flex-row justify-between sm:flex-col sm:items-center">
                        <img className="hover:animate-bounce" src={imgHtml} alt="" width={100} height={100} />
                        <img className="hover:animate-bounce" src={imgCss} alt="" width={100} height={100} />
                        <img className="hover:animate-bounce" src={imgJs} alt="" width={100} height={100} />
                        <img className="hover:animate-bounce" src={imgReact} alt="" width={100} height={100} />
                        <img className="hover:animate-bounce" src={imgTail} alt="" width={100} height={100} />
                    </div>
                    <div className="py-32 flex flex-col sm:text-justify sm:items-start">
                        <SubTitulo>Certificado: </SubTitulo>
                        <div className="flex justify-center items-center">
                            <a href="https://learn.devsuperior.com/certificados/5955491"><p className="hover:text-stone-700">DevSuperior</p></a>
                        </div>
                    </div>

                </Layout>
            </div>
            <Contact />
        </>
    )
}

export default Expertise