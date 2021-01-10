import styled from 'styled-components'
import { style } from 'styled-system'
import tw from 'twin.macro'

export const BottomShadow = styled.div.attrs({
    clasName: 'bottom-shadow'
})`

${tw`
    absolute
    bottom-0
    w-full
    h-full
    h-1/2

`}
z-index: 1;

background: transparent;
box-shadow: inset 0px -200px 300px -23px rgba(0,0,0,1);

`