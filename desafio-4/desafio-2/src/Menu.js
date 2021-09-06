import { H3 } from './Headings'
import Button from './Button'
import styled from 'styled-components'

function Menu () {
    return (
        <Nav className="menu"> 
            <H3>Home</H3>            
            <H3>Conteúdo</H3>            
            <Button kind="primary">Contate-nos</Button>            
        </Nav>
    )
}
export default Menu

const Nav = styled.nav`
    grid-area: menu;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: 2px solid #181818;
    background: #000;
`
