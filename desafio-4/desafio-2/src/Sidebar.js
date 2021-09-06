import styled from 'styled-components'
import { H2, H3 } from './Headings'

function Sidebar({ articles, setContent }) {
    return (
        <Aside>
            <H2>PublicaçÕes Recentes</H2>
            {
                articles.map(article => (
                    <H3 key={article.title}>
                        <Span onClick={() => setContent(article)}>
                            {article.title}
                        </Span>
                    </H3>
                ))
            }
        </Aside>
    )
}
export default Sidebar

const Aside = styled.aside`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;
    background: #000;

    h2 {
        font-size: 1.2rem;
        padding: 10px;
        color: #f36;
    }
    h3 {
        transition: 0.4s;
    }
    h3:hover {
        color: #f36;
    }
`
const Span = styled.span`
    cursor: pointer;
    font-size: 1.1rem;
`