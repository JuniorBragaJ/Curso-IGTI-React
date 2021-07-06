export default function Button({
    children: description,
    onButtonClick = null,
}) {
    function handleButtonClick() {
        if (onButtonClick) {
            onButtonClick();
        }
    }
    return <button className="bg-gray-200 p-2 rounded-md" onClick={handleButtonClick}>{description}</button>
}