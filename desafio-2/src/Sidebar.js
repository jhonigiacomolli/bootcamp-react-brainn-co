import { H2, H3 } from './Headings'

function Sidebar({ articles, setContent }) {
    return (
        <aside className="sidebar">
            <H2>PublicaçÕes Recentes</H2>
            {
                articles.map(article => (
                    <H3 key={'article-' + article.title}>
                        <a onClick={() => setContent(article)}>{article.title}</a>
                    </H3>
                ))
            }
        </aside>
    )
}
export default Sidebar