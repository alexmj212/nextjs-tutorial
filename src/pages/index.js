import Layout from '../components/Layout.js'
import HeaderLink from '../components/HeaderLink.js';

export default function Blog(props) {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <HeaderLink as={`/p/hello-nextjs`} href={`/post?title=Hello Next.js`} title="Hello Next.js"/>
            </ul>
        </Layout>
    )
}