
import styled from "styled-components";
import { Box } from "../../../elements";



//import dependecies

import CloseIcon from './closeIcon'
import Input from './input'
import SearchIcon from './searchIcon'
import TagItem from './tagitem'
import Tags from './tags'
import TagTitle from "./tagtitle";

const TagsInput = styled(Box)`


display: flex;
align-items: flex-start;
flex-wrap: wrap;
min-height: 48px;
padding: 0px 8px;
margin: auto;
border-radius: 8px;
position: relative;


&:focus-within {
    border: 1px dotted gainsboro;
}

`

TagsInput.CloseIcon = CloseIcon
TagsInput.Input = Input
TagsInput.SearchIcon = SearchIcon
TagsInput.TagItem = TagItem
TagsInput.Tags = Tags
TagsInput.TagTitle = TagTitle




//media Queries Styled-System


TagsInput.defaultProps ={
    
backgroundColor: ["white", null, null, "transparent"],
border: ["none", null, null, "1px dotted gainsboro"],
boxShadow:  ["0 0 5px", null, null, "none"],

}

export default TagsInput