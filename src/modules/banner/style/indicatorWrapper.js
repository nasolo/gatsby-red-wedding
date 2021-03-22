
import styled, { css } from 'styled-components'


const indicatorMediaQueries = ({theme}) => css`

    ${theme.mediaQueries.lg}{
        justify-content: flex-end;
    }

`

const IndicatorsWrapper = styled.div.attrs({
    className: 'container-fluid' 
})`

    width: 100%;
    bottom: 2em;
    display: flex;
    justify-content: center;
    position: absolute;
    padding-right: 20%;
    z-index: 100;
    
    ${indicatorMediaQueries};

`

export default IndicatorsWrapper