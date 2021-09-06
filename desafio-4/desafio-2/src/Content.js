import styled from 'styled-components'
import { H4 } from './Headings'

function Content ({ content }) {
    return (
        <Main className="content">
            <H4>{content.title}</H4>
            {content.content}
        </Main>
    )
}
export default Content

const Main = styled.main`
    grid-area: content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;
`