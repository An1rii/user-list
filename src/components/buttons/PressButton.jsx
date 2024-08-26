const PressButton = () => {
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Click")
    };

    return (
        <>
            <button type="button" onClick={handleClick} className='pressButton'> Click</button>
        </>

    );
};

export default PressButton;



