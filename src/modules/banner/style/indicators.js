import styled from "styled-components";






const bgColor =({active, theme}) =>({
    backgroundColor: active ? "white" : theme.colors.greys[9],
    transform: active ? "scale(1.1)" : "scale(1)"
})




export default styled.div.attrs(props =>({
    as: 'button',
    className: `btn btn-Indicator ${props.active ? "active" : "inactive"}`,
   
}))`

    height: 100%;
    width: 100%;
    max-width: 12.5rem;
    ${bgColor}
    border-radius: 0;
    outline: none;
    z-index: 1;
    margin: auto .50rem;
    flex-flow: 1;
    flex-shrink: 1;
    max-height: 1em;
    flex-basis: .5em;
    padding: .25rem .25rem;
`


