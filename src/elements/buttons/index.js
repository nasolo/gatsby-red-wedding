import styled from 'styled-components'
import tw from 'twin.macro'



export const GreyButton = styled.button.attrs({
    className: 'grey-button'
})`

    ${tw`
        h-full
        w-full
        p-8
        select-none
        z-10
        max-h-12
        focus:outline-none
        `
    }

    ${({ active }) => ({
        display: active ? "none" : "inline"
    })};
    background-color: #e6e6e6;
    :hover{
        background-image: linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));
    }

`