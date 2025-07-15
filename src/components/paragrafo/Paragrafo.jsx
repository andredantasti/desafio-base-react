

const TextColorUpper = ({children, colorText = 'red'}) =>{
    return (
        <div style={{color: colorText}}>
         {children}
        </div>
    )

}

export default TextColorUpper;