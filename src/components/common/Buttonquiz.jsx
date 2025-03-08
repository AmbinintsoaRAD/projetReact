const Buttonquiz = ({children, onClick, className}) => {
    const baseStyle = "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition";
    return (
        <button
            onClick={onClick}
            className={`${baseStyle} ${className}`}
        >
            {children}
        </button>
    );
};

export default Buttonquiz;