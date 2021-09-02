import { useState } from 'react'
import Button from './Button'
import { H4 } from './Headings'

function Content ({ articles }) {
    const [title, setTitle] = useState(articles[0].title)
    const [content, setContent] = useState(articles[0].content)
    return (
        <main className="content">
            <H4>{title}</H4>
            {content}
        </main>
    )
}
export default Content