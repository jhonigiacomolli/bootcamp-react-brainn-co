import { H2, h2 } from './Headings'
import Button from './Button'

function Menu () {
    return (
        <nav className="menu"> 
            <H2>Home</H2>            
            <H2>Conteúdo</H2>            
            <Button kind="primary">Contate-nos</Button>            
        </nav>
    )
}
export default Menu