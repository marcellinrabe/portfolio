export default function Options(props) {
    const options = props.payload.options;

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
}
