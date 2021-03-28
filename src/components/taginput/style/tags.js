import styled from "styled-components"
import { Box } from "../../../elements";

const Tags = styled(Box).attrs(props =>({
    as: 'ul'
}))`
  

display: flex;
flex-wrap: wrap;
padding: 0;
margin: 8px 0 0 0;

`


export default Tags