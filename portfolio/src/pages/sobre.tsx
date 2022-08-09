import Layout from "../components/Layout"
import '../styles/Page.css'
import imgProfile from '../assets/img/profile.jpg';
import Contact from "../components/Contact";
import imgStart from '../assets/img/capa.png';
import Nav from "../components/Nav";

function Sobre() {


  return (
    <>
      <Nav />
      <div className={`
    flex  justify-center items-center
    bg-hero-pattern w-full  sm:h-full md:h-full
    text-white bg-no-repeat bg-cover
`}>
        <Layout titulo="Sobre mim">
          <div className="flex flex-col sm:w-full">
            <div className="flex flex-col justify-center items-center">
              <img src={imgProfile} alt="" width={200} height={250} className="border-2 border-black rounded-[50%]" />
              <img src={imgStart} alt="" width={300} height={350} />
            </div>
            <div>
              <h3 className="pb-5">Um pouco da minha Historia: </h3>
              <p>Olá, meu nome é Diogo Henrique, tenho 23 anos e sou formado em sistemas para internet na Fatec São Roque e hoje estou Em busca de uma oportunidade na
                área de tecnologia , onde minha
                criatividade, habilidade e
                conhecimento possam ajudar na
                melhoria e no desenvolvimento da
                empresa.
              </p>
            </div>
            <div>
              <h3 className="py-5">Educação: </h3>
              <p className="pb-20">Formado em Sistemas para internet,
                na Faculdade de tecnologia de São
                Roque</p>

              <p>
                Formado Em: Julho/2021.
              </p>
            </div>

          </div>
        </Layout>
      </div>
      <Contact />
    </>
  )
}

export default Sobre