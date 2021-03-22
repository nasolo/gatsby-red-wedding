import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { Icon } from '../components';
import PropTypes from 'prop-types';
import { nanoid } from "@reduxjs/toolkit";
import { Box } from './box';
import { themeGet } from '@styled-system/theme-get';


const handleIcon = (type) => {
   
    switch (type) {
        case "left":
            return "leftChevron"
        case "right":
            return "rightChevron"
        default:
            return "wrong"
    }
    
}

const mediaQueries = ({theme}) => css`

    ${theme.mediaQueries.lg}{
        height: 3rem !important;
    }

`

export const Chevron = styled(Box).attrs(props => ({
    as: Icon,
    icon: handleIcon(props.type),
    key: `${props.type}-chevron-${nanoid()}`,
    className: `${props.type}-chevron`
}))`

height: 1.5rem !important;
fill: ${themeGet('colors.greys.9', 'grey')};
${mediaQueries};

`

Chevron.propTypes = {
    type: PropTypes.string.isRequired
}