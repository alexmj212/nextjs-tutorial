import { withRouter } from 'next/router'
import Layout from '../components/Layout'

const Content = withRouter(props => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>This is the about content.</p>
    </div>
))

export default function About() {
    return (
        <Layout>
            <Content></Content>
        </Layout>
    )
}