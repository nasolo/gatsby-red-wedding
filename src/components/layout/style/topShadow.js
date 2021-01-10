import styled from 'styled-components'
import { style } from 'styled-system'
import tw from 'twin.macro'

export const TopShadow = styled.div.attrs({
    className: 'top-shadow'
})`
${tw`
    absolute
    top-0
    w-full

    h-full
`}
z-index: 1;
background: transparent;
box-shadow: inset 0px 150px 300px -44px rgba(0,0,0,1);


`