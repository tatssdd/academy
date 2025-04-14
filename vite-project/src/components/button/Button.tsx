import styled from '@emotion/styled';
import { useState } from "react"

interface TButton {
primary: boolean
}

const MyButton = styled.button<TButton>`
            padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: ${(props) => (props.primary ? '10px' : '1px')};
      color: ${(props) => (props.primary ? 'yellow' : 'pink')}
            `

function Button(){
   const [isPrimary, setIsPrimary] = useState(true) 

const mouseEnter = () => {
    if (isPrimary){
        setIsPrimary(false)
    } else {
        setIsPrimary(true)
    }
}
    return(
        <MyButton primary={isPrimary} onMouseEnter={mouseEnter}>hover me</MyButton>
    )
}



export default Button