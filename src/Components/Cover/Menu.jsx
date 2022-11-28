export default function Menu({ links }) {
    return (
        <nav className="menu">
            <ul className="m-0 p-0 h-100 d-flex align-items-center">
                {links.map(({ key, href, label }, index) => (
                    <li key={'Menu' + index + key}>
                        <a href={href}>{label}</a>
                        <div className="underline"></div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
