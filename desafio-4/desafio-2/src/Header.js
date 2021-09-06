import styled from 'styled-components'
import { H2 } from './Headings'

function Header () {
    return (
        <Header1 className="header">
            <Image src="/logo.svg" alt="logo brainn" />
            <H2>Brainn Notices</H2>
        </Header1>
    )
}
export default Header

const Header1 = styled.header`
    grid-area: header;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background: linear-gradient(0deg, #080808, #181818)
`

const Image = styled.img`
    width: 80px;
    height: 80px;
`
