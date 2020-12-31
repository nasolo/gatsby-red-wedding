import styled from "styled-components"
import { themeGet } from '@styled-system/theme-get'
import tw from "twin.macro"

export const Drawer = styled.aside.attrs({
    className: "side-drawer"
})`

${tw`
    fixed 
    inset-0 
    z-40
`};

`

export const DrawerOverlay = styled.div.attrs({
    className: 'drawer-overlay'
})`

${tw`
    inset-0 
    fixed
`};

background-color: rgba(0,0,0,.4);

`


export const DrawerContainer = styled.div.attrs({
    className: `drawer-inner`
})`

${tw`
    
    fixed 
    right-0 
    inset-y-0 
    shadow-lg 
    w-full 
    flex
    z-50
    

`};
background-color: ${themeGet('colors.mobileMenu', 'grey')};
max-width: 275px;

`


export const Nav = styled.nav.attrs({
    className: 'nav drawer-content'
})`

${tw`

    flex-1
    overflow-hidden
    p-6
    md:p-8

`};

`

export const NavWrapper = styled.div.attrs({
    className: `nav-wrapper`
})`

${tw`

    -mb-6
    md:-mb-8
    lg:hidden

`};

`

export const NavMenu = styled.div.attrs({
    className: 'nav-menu'
})`

${tw`
    mb-8
    clear-both
`};

`


export const MenuContainer = styled.div.attrs({
    className: 'menu-container'
})`

${tw`
    flex
    flex-col
    h-screen
    text-xs 
    font-medium
`};

`

export const LinksWrapper = styled.div.attrs({
    className: 'links-wrapper'
})`

${tw`
    flex
    flex-col
    text-right
`};

`
