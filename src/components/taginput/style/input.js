import styled from "styled-components";
import { Box } from "../../../elements";

const Input  = styled(Box).attrs(props =>({
    as: "input",
    type: "text"
}))`

border: none;
::placeholder {
  color: gainsboro
}
min-height: 46px;
width: 100%;
font-size: 14px;
padding: 4px 0 0 0;
background-color: transparent;
&:focus {
			outline: transparent;
		}

`


export default Input