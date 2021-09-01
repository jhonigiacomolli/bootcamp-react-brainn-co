import Button from './Button'
import { H4 } from './Headings'
function Content () {
    return (
        <main className="content">
            <H4>Primeiro artigo do aplicativo</H4>
            <p>Este é o primeiro artigo criado para a nossa aplicação, e tem como objetivo popular este layout durante este exercício</p>
            <Button kind="secundary">Saiba Mais</Button>
        </main>
    )
}
export default Content