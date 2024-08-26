const PressButton1 = () => {
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Click")
    };

    return (
        <button onClick={handleClick} className='pressButton'> Click </button>
    );
};

export default PressButton1;

