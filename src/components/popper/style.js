import styled from 'styled-components'
import tw from 'twin.macro'


const twStyle = tw`
   
    list-none
    rounded-none
    bg-black
    text-center
    relative
    z-50
    p-8
`

export const TippyBox = styled.div.attrs({
    className: "tippy-box"
})`
  border: 1px solid rgba(27, 31, 35, 0.15);
  font-size: 12;
  ${twStyle}
`


export const TippyWrapper = styled.div.attrs({
  className: "tippy-wrapper"
})`
  ${
    tw`
      text-white
    `
  }
`