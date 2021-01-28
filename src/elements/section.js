import styled from 'styled-components';
import tw from 'twin.macro'
import { Box } from '.'

export const Section = styled(Box).attrs({
    className: `section`,
    as: Section
})`

    ${
        tw`
            h-screen
            w-screen
            overflow-hidden
        `
    }



`
