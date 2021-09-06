import { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Menu from './Menu';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

function App () {
    const articles = [
        {
            id: 1,
            title: 'Notebook: dicas para limpar corretamente',
            content: <article>
                        <p>Use pano macio ou microfibra, pincéis e produtos corretos, como álcool isopropílico, para manter o equipamento limpo e aumentar sua vida útil</p>
                        <p>Uma rotina de limpeza pode prolongar a vida útil do seu notebook. No entanto, é preciso ter certos cuidados para não acabar prejudicando a máquina, ao invés de cuidar dela. O Shoptime explica como deve ser feita a limpeza de forma correta.</p>
                    </article>
        },
        {
            id: 2,
            title: 'Western Digital muda SSD e o deixa mais lento',
            content: <article>
                        <p>Você decide “turbinar” o seu computador com um SSD, pesquisa por um modelo bem avaliado, faz a compra e, ao instalá-lo, descobre que o desempenho não é o esperado. Defeito? Não. Talvez algum componente tenha sido trocado pelo fabricante sem aviso prévio. É o que aconteceu com o SSD WD Blue SN550, da Western Digital.</p>
                        <ul>
                            <li>SSD Sata ou NVMe; qual a diferença?</li>
                            <li>Como saber qual fonte usar no PC [calcular potência]</li>
                        </ul>
                        <p>Não pense que esse tipo de comportamento é exclusividade da marca. SSDs de companhias como Crucial e Samsung também passaram por trocas “silenciosas” de componentes recentemente.</p>
                    </article>
        },
        {
            id: 3,
            title: 'Twitter planeja implementar gorjetas em bitcoin no Tip Jar',
            content: <article>
                        <p>Múltiplos vazamentos sugerem que o Twitter estaria trabalhando em uma função que integra gorjetas em bitcoin (BTC) ao Tip Jar através da Lightning Network</p>
                        <p>Aparentemente, a última atualização da versão beta do Twitter traz uma interessante novidade: criadores de conteúdo poderão receber “gorjetas” em bitcoin (BTC) através do recurso “Tip Jar”, introduzido há alguns meses. Tecnicamente, a funcionalidade ainda não está disponível, mas o código da versão de testes e um reconhecido leaker indicam que o recurso está em processo de implementação.</p>
                        <ul>
                            <li>O que é bitcoin? [como comprar e acompanhar a cotação]</li>
                            <li>Como ativar as gorjetas no Twitter [Tip Jar]</li>
                        </ul>
                        <h6>Função traria integração com Lightning Network</h6>
                        <p>De acordo com os vazamentos, a função de gorjeta usará a Lightning Network para fazer pagamentos de bitcoin e trará suporte para carteiras digitais da plataforma Strike, que opera sob a tecnologia.</p>
                    </article>
        }
    ]  
    const [content, setContent] = useState({
        id: articles[0].id,
        title: articles[0].title,
        content: articles[0].content
    })

    return (
        <>
            <GloBalStyle />
            <Header />
            <Menu />
            <Sidebar articles={articles} setContent={setContent}/>
            <Content content={content}/>
            <Footer />
        </>
    )
}
export default App

const GloBalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background: linear-gradient(0deg, #080808, #181818);
        color: #777;
    }
    p {
        font-family: 'Courier New', Courier, monospace;
        font-size: 0.875rem;
        font-weight: 300;
    }
    a {
        cursor: pointer;
    }
    #root {
        min-width: 100vw;
        min-height: 100vh;
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: auto auto 1fr auto;
        grid-template-areas: 
            "header header"
            "menu menu"
            "sidebar content"
            "footer footer"
        ;
    }
    
`