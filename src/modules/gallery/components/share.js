import React, { useRef } from 'react'
import { Icon, Popper } from '../../../components';
import { ShareIconsWrapper } from '../style'
import { IconBoxWrapper } from '../../../elements';
import { IconBox } from '../../../components/iconBox/index';




const ShareIcon = (icon) => (
    
    <Icon icon={icon} key={icon} size={'large'} height={'1.5rem'} />
)



export const ShareGallery = props => {

    const starRef = useRef("")
    const options = {
        size: "large",
        height: "1.5rem",
        fill: "rgba(204,204,204,.7)"
    }
    
    const socialMediaSharingOptions = [
        {
            icon: "camera",
            share: "Image"
        },
        {
            icon: "gallery",
            share: "Gallery"
        },
        {
            icon: "star",
            share: "Favourites"
        }
    ]

    return (
        <ShareIconsWrapper>
            <Popper
                trigger="click"
                html={<>"Select star to favorite images you love"</>}
            >
                
                <Icon  icon="star" key="star" ref={starRef} {...options}/>
                
            </Popper>

            <Popper
                trigger="click"
                html={
                    <IconBoxWrapper direction="col">
                        {socialMediaSharingOptions.map(({icon, share}, i) =>(

                            <IconBox 
                                icon={icon} 
                                heading={`Share ${share}`} 
                                key={`${share}-${icon}`}
                            />
                        ))}
                    </IconBoxWrapper>
                }
            >
                <Icon  icon="paperplane" key="paperplane" {...options}/>
            </Popper>


        </ShareIconsWrapper>
    )

}