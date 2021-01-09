import { Link } from 'gatsby'
import styled from 'styled-components'
import { Box } from '../../../elements'


export const CardLink = styled(Box).attrs(props => ({
    className: 'card-link',
    as: props.href ? 'a' : Link
}))``