import Link from 'next/link'

const linkStyle = {
    marginRight: '15px'
}

const linkPrefix = process.env.NODE_ENV === 'production' ? '/nextjs-tutorial' : ''

const HeaderLink = props => (
    <li>
        <Link as={`${linkPrefix}${props.as}`} href={`${props.href}`}>
            <a style={linkStyle}>{props.title}</a>
        </Link>
    </li>
)

export default HeaderLink