import styled from "styled-components";
import { Box } from "../../../elements";



const CloseIcon = styled(Box).attrs({
    as: 'span'
})`

    display: block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    margin-left: 8px;
    color: #0052cc;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;

`

export default CloseIcon