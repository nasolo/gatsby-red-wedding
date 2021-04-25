import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { themeGet } from '@styled-system/theme-get';


const lg = themeGet('mediaQueries.lg')
const lgFill = themeGet('colors.whites.9', 'white')
const smFill = themeGet('colors.blacks.5', "grey")
const smActiveFill = themeGet('colors.blacks.9', "black")

const twWrapperStyle = tw`
    flex
    flex-auto
    w-full
    justify-evenly
    items-end
    cursor-pointer
`

const mediaBoxStyle = css`

    .media-box{
        ${tw`
                flex-col
                lg:m-0
                lg:flex-row
                
            `
        }
    }


`

const dronesIconStyle = css`
    .drones {
        max-width: 3rem;
        ${lg} {
            max-width: 5rem;
        }
    }
`

const svgMediaQuery = css`

svg {
    height: 1.5rem;
    width: 4rem;
    fill: ${smFill};
     &.active {
        fill: ${smActiveFill};
    }
    ${lg} {
        height: 2rem;
        width: 5rem;
        fill: ${lgFill};
         &.active {
            fill: "white"
        }
    }
}
`

const mediaHeadingStyle = css`

    text-align: center;
    font-weight: 600;
    font-size: .50em;
    color: ${smFill};
    &.active {
        color: ${smActiveFill};
    }
    
    ${lg}{
        width: min-content;
        font-size: .75rem;
        color: ${lgFill};
        &.active {
            color: ${smActiveFill}
        }
    }

`

export const FilterIconsWrapper = styled.div.attrs({
    className: `filter-icon-wrapper`
})`

    ${twWrapperStyle}
    ${mediaBoxStyle}
    ${mediaHeadingStyle};
    ${dronesIconStyle};
    ${svgMediaQuery};
    
`