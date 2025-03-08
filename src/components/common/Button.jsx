const Button = ({children, onClick, className, variant}) => {
    const baseStyle = "text-white rounded-full px-6 py-2 w-40";
    const variants = {
        connect: "bg-green-500",
        reset: "bg-red-500",
        select: "bg-white text-gray-800 p-6 rounded-lg shadow-lg w-96",
    };
    
    return (
        <button
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;