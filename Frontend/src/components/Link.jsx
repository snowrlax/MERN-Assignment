const Link = ({title, className}) => {
    return <li className={`nav-item`}>
        <a className={`${className} nav-link`} aria-current="page" href="#">{title}</a>
    </li>
}

export default Link