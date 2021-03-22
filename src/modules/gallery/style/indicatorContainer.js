import styled from 'styled-components'
import tw from 'twin.macro'

const twStyle = tw`

    w-full
    h-full
    flex
    space-x-2
    justify-center
    


`

export const IndicatorContainer = styled.div.attrs({
    className: `indicator-container`
})`

    ${twStyle};

`