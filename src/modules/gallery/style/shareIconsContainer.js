import styled from "styled-components"
import tw from 'twin.macro'



const lg = tw `

    lg:relative
    lg:justify-start

    

`

const style = tw`

    flex
    absolute
    space-x-2
    justify-end

`


export const ShareIconsWrapper = styled.div.attrs({
    className: "share-icon-wrapper"
    
})`
   ${lg};
   ${style};
   width: 90%;
   top: 20%;


`


