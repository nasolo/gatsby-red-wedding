import styled from "styled-components";

 export const PlayerWrapper = styled.div.attrs({
    className: "player-wrapper w-100 h-100"
 })`

    &:hover{
       cursor: pointer;
    }



.react-player__shadow{
      display: ${({light}) => light ? "none" : "inline"};
      height: 100% !important;
      width: 100% !important;
      max-height: 12rem !important;
      max-width: 12rem !important;
      border-radius: 100% !important;
      background: none !important;
}

 `