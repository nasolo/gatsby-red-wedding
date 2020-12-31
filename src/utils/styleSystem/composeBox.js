import {
    background,
    border,
    bottom,
    shadow,
    color,
    compose,
    layout,
    position,
    space,
    typography,
    flexbox
    
  } from 'styled-system';

export const ComposeBoxHelper = compose(
    flexbox,
    background,
    border,
    bottom,
    shadow,
    color,
    layout,
    position,
    space,
    typography
)


