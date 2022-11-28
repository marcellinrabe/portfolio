export default function Menu({ links }) {
    return (
        <nav className="menu d-flex align-items-center">
            <ul className="m-0 p-0">
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
