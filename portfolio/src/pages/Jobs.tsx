import Contact from "../components/Contact"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import SubTitulo from "../components/SubTitulo"
import '../styles/Page.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

function Jobs() {


    return (
        <>
        <Nav />
        <div className={`
            flex  justify-center items-center
            bg-hero-pattern w-full  sm:h-full md:h-full
            text-white bg-no-repeat bg-cover 
    `}>
            <Layout titulo="Trabalhos">
                <div className="flex flex-col">
                    <div className="flex flex-col pb-32 pt-32 ">
                    <SubTitulo>Tribunal de Justiça de São Paulo: </SubTitulo>
                        <p>Setor: Execuções Fiscais da Comarca de São Roque.</p>
                        <p>Cidade: São Roque.</p>
                        <p>Função: Jovem Aprendiz.</p>
                        <p>Período: janeiro/2017 a dezembro/2017.</p>
                    </div>
                    <div className="flex flex-col">
                    <SubTitulo>Atlética Godzilla: </SubTitulo>
                        <p>Setor: Back-End.</p>
                        <p>Cidade: São Roque.</p>
                        <p>Função: Estagiário.</p>
                        <p>Período: janeiro/2021 a julho/2021.</p>
                    </div>
                </div>
            </Layout>
        </div>
        <Contact />
        </>
    )
}

export default Jobs