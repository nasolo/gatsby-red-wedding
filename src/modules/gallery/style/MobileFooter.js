import { themeGet } from '@styled-system/theme-get'
import styled from 'styled-components'
import tw from 'twin.macro'

const twStyle = tw`

    block
    absolute
    w-full
    bottom-0
    
`

const lgStyle = tw`

    lg:hidden


`
const bgColor = themeGet('colors.greys.13', 'gainsboro')

export const MobileFooter = styled.div.attrs({
    className: `mobile-footer`
})`

    ${twStyle};
    ${lgStyle};

    background-color: ${bgColor}

`


