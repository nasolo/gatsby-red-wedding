import styled from "styled-components"
import tw from 'twin.macro'



const lg = tw `

    lg:relative
    lg:justify-start
    lg:w-1/12
    

`

const style = tw`

    flex
    absolute
    space-x-2
    justify-end
    w-10/12
  

`


export const ShareIconsWrapper = styled.div.attrs({
    className: "share-icon-wrapper"
    
})`
   ${lg};
   ${style};
   top: 20%;


`


