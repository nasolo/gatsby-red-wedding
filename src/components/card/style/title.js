import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { themeGet } from '@styled-system/theme-get'



export const Title = styled.h1.attrs(props =>({
    className: 'card-title',
    children: props.title
}))`

${tw`
    mb-2
    lg:text-6xl
`}

font-size: ${(themeGet('fonts.sizes.lg', '1rem'))};

`