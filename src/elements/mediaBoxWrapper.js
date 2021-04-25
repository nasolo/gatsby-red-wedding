import styled from 'styled-components'
import tw from "twin.macro"

const twStyle = tw`

    flex
    flex-nowrap
    justify-between
    space-y-3

`


export const IconBoxWrapper = styled.div.attrs({
    className: "Icon-Box-wrapper"
})`

    ${({direction}) => direction === "col" ? tw`flex-col` : tw`flex-row`};
    ${twStyle};

`