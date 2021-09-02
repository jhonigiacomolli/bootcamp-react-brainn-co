import { H4 } from './Headings'

function Content ({ content }) {
    return (
        <main className="content">
            <H4>{content.title}</H4>
            {content.content}
        </main>
    )
}
export default Content