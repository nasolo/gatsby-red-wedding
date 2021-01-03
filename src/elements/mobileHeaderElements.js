import styled from 'styled-components'
import tw from 'twin.macro'

export const SiteMobileHeader = styled.div.attrs({
    className: `site-header-mobile`
})`

${tw`lg:hidden bg-transparent relative`}

`


export const MobileHeaderWrapper = styled.div.attrs({
    className: `mobile-header-wrapper`
})`

${tw`h-40`}

`


export const MobileChatMenu = styled.div.attrs({
    className: `mobile-chat-menu`
})`

    ${tw`
        text-center 
        grid 
        grid-cols-2 
        text-white 
        divide-x-2 
        divide-dotted 
        w-full 
        h-full`
    }

    font-size: .55rem;
    font-weight: bold;

`