import HeaderLink from '../components/HeaderLink'

const Header = () => (
    <ul>
        <HeaderLink href="/" as="/" title="Home"></HeaderLink>
        <HeaderLink href="/about?title=About" as="/about" title="About"></HeaderLink>
    </ul>
)

export default Header