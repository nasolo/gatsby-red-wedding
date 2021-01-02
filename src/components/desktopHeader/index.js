import React from 'react'
import { 
    HideDesktopHeader, 
    Wrapper, 
    MenuContainer, 
    SiteBranding,
    NavLinksFlexWrapper,
    DesktopNav,
    ContactLinks,
    LinkWrapper
} from './style'
import { Brand } from '..'
import { Container } from '../../elements'
import { NavLinks } from '../'


export const DesktopHeader = props => {


    const menuIcons = [{
        url: 'chat-live',
        icon: 'person'
      }]

    return (
        <HideDesktopHeader>
            <Wrapper>
                <Container>
                <MenuContainer>
                    <SiteBranding>
                        <Brand/>
                    </SiteBranding>
                        <NavLinksFlexWrapper>
                        <DesktopNav>
                            <LinkWrapper className="flex-1">
                                <NavLinks slug="main-menu" className="m-auto"/>
                            </LinkWrapper>
                            <ContactLinks>
                                <NavLinks slug={"contact"} icons={menuIcons} fill="white" className="py-3 px-5"/>
                            </ContactLinks>
                        </DesktopNav>
                        </NavLinksFlexWrapper> 
                </MenuContainer>
                </Container>
            </Wrapper>
        </HideDesktopHeader>
    )
}