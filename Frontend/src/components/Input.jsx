const Input = ({type, placeholder, className}) => {
    return <input 
        type={type} 
        className={`${className} col form-control form-control-lg`} 
        placeholder={placeholder} 
        style={{borderRadius: 0}}
    />
}

export default Input