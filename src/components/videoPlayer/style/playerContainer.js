import styled from "styled-components"

export const PlayerContainer = styled.div.attrs({
    className: 'video-player-container'
})`

    height: inherit;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;

    .react-player {
        width: 100% !important; 
        height: 100% !important;
    }
    

`