export default function Message({ children, user }) {
    return (
        <div className={`w-100 mb-3 ${user ? 'd-contents' : ''}`}>
            <div
                className={`message bg-light color-white p-3 rounded-5 ${
                    user ? 'align-self-end' : ''
                }`}
            >
                {children}
            </div>
        </div>
    );
}
