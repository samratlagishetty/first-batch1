import './StyledButton.css'

function StyledButton(props){
    const {text, onClick} = props
    return(
        <button class="buttonpicker" onClick={onClick}>{text}</button>
    )
}

export default StyledButton;