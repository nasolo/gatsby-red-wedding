import styled from "styled-components";
import tw from "twin.macro";

const gridCols = ({grid}) => {
    if(!grid) return `grid-cols-2`
    return `grid-cols-${grid}`
}

export const ContactLinks = styled.div.attrs(props => ({
    className: `contact-links ${gridCols(props)}`
}))`
${tw`
    text-center 
    grid 
    divide-x
    divide-dotted 
    text-white
    rounded-lg
    border
    font-medium 
`
}
background: rgb(255,0,8);
background: linear-gradient(180deg, rgba(255,0,8,1) 0%, rgba(102,0,0,1) 80%);

`