import styled from 'styled-components'
import { H5, H6 } from './Headings'

function Footer () {
    return (
        <Footer1 className="footer">
            <p>Layout desenvolvido por </p>
            <H5>Jhoni Giacomolli </H5>
            <p>durante o </p>     
            <H6>Bootcamp React | Brainn.co</H6>       
        </Footer1>
    )
}
export default Footer

const Footer1 = styled.footer`
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h5, h6 {
        cursor: pointer;
        transition: 0.4s;
    }
    h5:hover, h6:hover {
        color: #f36;
    }
`