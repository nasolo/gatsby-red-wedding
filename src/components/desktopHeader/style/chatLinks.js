import styled from "styled-components";
import tw from "twin.macro";



export const ContactLinks = styled.div.attrs({
    className: 'contact-links'
})`
${tw`
    text-center 
    grid 
    grid-cols-2
    divide-x
    divide-dotted 
    text-white
    h-full
    rounded-lg
    border
    font-medium
   
`};

background: rgb(255,0,8);
background: linear-gradient(180deg, rgba(255,0,8,1) 0%, rgba(102,0,0,1) 80%);

`