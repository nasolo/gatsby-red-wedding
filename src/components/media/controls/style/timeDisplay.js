import styled from "styled-components"
import tw from 'twin.macro'



export const TimeDisplay = styled.div.attrs({
    className: `time-display`
})`
    ${
        tw`
            inline-block
            align-middle
            whitespace-nowrap
            space-x-2
            divide-dotted
            divide-white
            divide-x-2
            text-white
            text-xs
            tracking-wider
        `
    }

    time{
        ${tw`pl-2  `}
    }
`