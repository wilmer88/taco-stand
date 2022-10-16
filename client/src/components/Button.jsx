const Button= (props) => {


    return(<>
 <button
 className={`button ${props.type || "is-primary is-light"}`}
 onClick={props.dosumn}>
    {props.text}
 </button>
        </>)

}

export default Button
