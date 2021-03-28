import styled from "styled-components";
import { Box } from "../../../elements";

const TagItem = styled(Box).attrs(props =>({
    as: 'li'
}))`

    width: auto;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    background: black;

`


export default TagItem