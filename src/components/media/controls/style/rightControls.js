import styled from "styled-components"
import tw from 'twin.macro'


export const RightControls = styled.div.attrs({
    className: `right-controls`
})`
    ${
        tw`
            flex
            flex-initial
            align-middle
            justify-center
            content-center
            w-4/12
            lg:w-2/12
        `
    }
`

export default RightControls