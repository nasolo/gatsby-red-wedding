import styled from "styled-components"
import tw from 'twin.macro'


export const ProgressBarContainer = styled.div.attrs({
    className: `progress-bar-container`
})`
   
   ${
       tw`
            flex-1
            flex
            align-middle
            h-full
            justify-center
            content-center
            mx-2
            my-auto
            
       `
   }
  
  input {
      ${
          tw`
            m-auto
          `
      }
  }

`