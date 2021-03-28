import styled from 'styled-components'
import { Box } from '../../../elements'





export const MediaHeading = styled(Box).attrs(props => ({
    as: `h5`,
    className: 'media-box-heading',
    children: props.heading
}))`

    margin: auto;
    padding-left: 0.5rem;

`