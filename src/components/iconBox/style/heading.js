import styled from 'styled-components'
import tw from 'twin.macro'
import { Box } from '../../../elements'





export const MediaHeading = styled(Box).attrs(props => ({
    as: 'p',
    className: 'media-box-heading',
    children: props.heading
}))`

    ${
        tw`
            my-auto
            mx-1
            lg:w-min
            whitespace-nowrap
            text-center
        `
    }
`