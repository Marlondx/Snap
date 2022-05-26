function Buttoon({onClick,type,Text}) {
    return(
        <div><button onClick={onClick} type={type} >{Text}</button></div>
    )
}

export default Buttoon