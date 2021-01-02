import React from 'react'

import { motion, AnimatePresence } from "framer-motion"
import { 
    DrawerOverlay, 
    Drawer, 
    DrawerContainer, 
    Nav,
    NavWrapper,
    NavMenu,
    MenuContainer,
    LinksWrapper,
    Hamburger
} from "../../elements"
import { NavLinks } from '../navLinks'
import { SocialMediaLinks, Copyright } from '../'



const drawerContainerVariants ={
    open: {
        x: -1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
          },
        display: "initial",
      },
      initial: {
        x: "100%",
        opacity: 0
      },
      closed: {
        x: "100%",
        opacity: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
        transitionEnd: {
            display: "none",
          }
      }
}

const containerVaraints = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
      }
}


export const SideDrawer = ({isOpen, toggle}) => {


const handleToggle = () => toggle()

return (
    <AnimatePresence>
        {isOpen && 
            <Drawer>
                <DrawerOverlay 
                    as={motion.div}
                    onClick={handleToggle}
                    key={"modal"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
                <DrawerContainer
                    as={motion.div}
                    key="drawer-container"                   
                    custom={isOpen}
                    animate={isOpen ? "open" : "closed"}
                    initial="initial"
                    enter="open"
                    exit="closed"
                    variants={drawerContainerVariants}
                >
                    <Nav>
                        <NavWrapper>
                            <NavMenu>
                                <MenuContainer
                                    as={motion.div}
                                    variants={containerVaraints}
                                >
                                <LinksWrapper key="hamburger">
                                    <Hamburger toggle={handleToggle} isOpen={isOpen} stroke="black" className="ml-auto mb-2"/>
                                </LinksWrapper>

                                    <LinksWrapper key="side-drawer-links">
                                        <NavLinks slug={'side-drawer'} className="my-auto py-2"/>
                                    </LinksWrapper>
                                    <LinksWrapper key="social-media-links" className="self-end mt-auto">
                                            <SocialMediaLinks exclude="pinterest" size="medium" className="py-3" color="opaque"/>
                                    </LinksWrapper>
                                    <LinksWrapper key="copyright" className="self-end mt-4 mb-4">
                                        <Copyright />
                                    </LinksWrapper > 
                                </MenuContainer>
                            </NavMenu>
                        </NavWrapper>
                    </Nav>
                </DrawerContainer>
            </Drawer>
        }
  </AnimatePresence>
)

}