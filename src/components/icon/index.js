import React from 'react'
import styled from 'styled-components'
import { ICON } from '../../data/icons'
import { variant } from 'styled-system'
import { Box } from '../../elements'
import { themeGet } from '@styled-system/theme-get'



const Svg = styled(Box).attrs(props => ({
    className: `${props.icon}`,
    viewBox: `${props.viewBox}`,
    as: 'svg'
}))`


    ${variant({
        prop: 'size',
        variants:{
            large:{
                height: themeGet('icons.size.large', '2rem')
            },
            medium:{
                height: themeGet('icons.size.medium', '1.5rem')
            },
            small:{
                height: themeGet('icons.size.small', '1rem')
            }
        }
    })};

${variant({
        prop: 'color',
        variants:{
            opaque:{
                fill: themeGet('icons.colors.opaque', 'grey')
            },
            black: {
                fill: 'black'
            }
        }
    })};

    
    ${props => ({
        height: !props.size && '1rem',
    })};
    display: inline;
  

`

const iconArrtributes = icon => {
    return(
        <>
            {icon.path && icon.path.map(path => <path d={path}></path>)}
            {icon.polygon && icon.polygon.map(points => <polygon points={points}></polygon>)}
            {icon.circle && icon.circle.map(circle => <circle {...circle}></circle>)}
         </>

    )
}



export const Icon = ({icon, ...rest}) => {


    const svg = ICON[icon.toUpperCase()] || ICON.WRONG
    const viewBox = svg.viewBox || "0 0 24 24"

    const svgAttr = iconArrtributes(svg)

    return (
        <Svg icon={icon} viewBox={viewBox} { ...rest }>

           {svgAttr}

        </Svg>
    )
}
