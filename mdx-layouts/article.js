import Qa from '../components/qa.js'

export default frontMatter => {
    return ({ children: content }) => {
        return (
            <div>
                <h1>{frontMatter.title}</h1>
                {content}
                <Qa />
            </div>
        )
    }
}