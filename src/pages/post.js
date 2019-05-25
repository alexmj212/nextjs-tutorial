import { withRouter } from 'next/router'
import Layout from '../components/Layout.js'

const Content = withRouter(props => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>Funny story, so I tried to export this project and use it as a GitHub Page.</p>
        <p>But because <a href="https://github.com/zeit/next.js/issues/4998">nextjs doesn't support relative paths or base paths</a> at the time of making this,
            I had to implement a custom solution to solve the routing issue.</p>
        <p>I created a custom component that performs the adjust to the Link generation. This seemed to be the preferred workaround per discussion on GitHub.</p>
    </div>
))

const Page = () => (
    <Layout>
        <Content />
    </Layout>
)

export default Page