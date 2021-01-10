import styled from "styled-components";
import tw from 'twin.macro'
import { Box } from '../../../elements/box';

export const Wrapper = styled(Box).attrs({
    className: 'bg-image-wrapper'
})`
${tw`
    absolute
    h-screen
    w-screen
    overflow-hidden
    text-white
    inset-x-0
`}

`