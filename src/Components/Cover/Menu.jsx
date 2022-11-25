export default function Menu({ links }) {
    return (
        <nav className="menu">
            <ul>
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
