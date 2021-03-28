import styled from 'styled-components'
import tw from 'twin.macro'


const twStyle = tw`

    lg:flex
    hidden
    w-full


`

export const Filters = styled.div.attrs({
    className: `filter-icons`
})`

    ${
        twStyle
    };

`