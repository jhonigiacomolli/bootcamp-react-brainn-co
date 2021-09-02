import { H2, H3 } from './Headings'

function Sidebar({ articles }) {
    return (
        <aside className="sidebar">
            <H2>PublicaçÕes Recentes</H2>
            {
                articles.map(article => (
                    <H3 key={'article-' + article.title}>
                        <a>{article.title}</a>
                    </H3>
                ))
            }
        </aside>
    )
}
export default Sidebar