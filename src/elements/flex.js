import styled from 'styled-components'
import tw from 'twin.macro'


const handleFlex = util => {

    const options = {
        center: tw`items-center`,
        end: tw`items-end`,
        start: tw`items-start`,
        baseline: tw`items-baseline`,
        stretch: tw`items-stretch`
    }

    if(util === null) return  options.center

    return options[util] === undefined ? options.center : options[util]

}


export const Flex = styled.div.attrs({
    className: 'flex-container'
})`

${tw`flex h-full`}


${props => props.align ?  handleFlex(props.align) : tw`items-center`};


`