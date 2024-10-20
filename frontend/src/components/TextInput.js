const TextInput = ({label,placeholder,className , value , setValue ,labelClassName}) => {
    return (
        <div className={`TextInput flex flex-col space-y-2 ${className}`}>
            <label htmlFor={label} className={`font-semibold  ${labelClassName}`}>{label}</label>
            <input 
                type="text" 
                placeholder={placeholder} 
                className="p-2 text-white border bg-zinc-900 border-gray-400 border-solid rounded placeholder-gray-500  hover:border-white"
                id={label}
                value = {value}
                onChange={(e) =>{
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};

export default TextInput;
