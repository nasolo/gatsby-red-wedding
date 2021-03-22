import styled, { css } from "styled-components";

const mediaQueries = ({theme}) => css`

    ${theme.mediaQueries.lg}{
        max-width: 7rem;    
    }

`

const Indicator = styled.button.attrs(props =>({
    className: `${props.active ? "active" : "inactive"}`,
   
}))`
        height: 100%;
        flex: 1 1 auto;
        max-width: 4rem;  
        background-color: ${({active, theme}) => active ? theme.colors.whites[10] : theme.colors.greys[9]};
        &:focus{
            outline: none;
        }

        ${mediaQueries}

`

export default Indicator

