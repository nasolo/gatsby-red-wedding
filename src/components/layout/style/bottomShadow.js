import styled from 'styled-components'
import { style } from 'styled-system'
import tw from 'twin.macro'

export const BottomShadow = styled.div.attrs({
    className: 'bottom-shadow'
})`

${tw`
    absolute
    bottom-0
    w-full
    h-2/3
   

`}
z-index: 1;

background: transparent;
box-shadow: inset 0px -100px 59px -21px rgba(0,0,0,.90);

`