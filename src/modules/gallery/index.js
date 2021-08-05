import React, { useState, useRef } from 'react'
import { Section } from '../../elements/section';
import { Media } from '../../components/media';
import { AutoComplete,
        IconBox
    } from '../../components';
import { Indicators } from './components/controls';

import { Container, GreyButton } from '../../elements';
import { 
        PageWrapper, 
        PageContainer, 
        CarouselWrapper,
        Filters, 
        FilterIconsWrapper, 
        AutoCompleteWrapper,
        MobileFooter,
        FooterButtonWrapper,
        FooterHeading,
        FooterCloseBtn
    } from './style' 
import { ShareGallery } from './components/share';
import { ContactLinks } from '../../components/desktopHeader/style/chatLinks';
import { FooterHeadingWrapper } from './style/footerHeading';
import { useCarousel } from '../../utils/hooks/useCarousel';


export const Gallery = ({
    page: {title, slug},
    blocks,
    fieldName,
    filters
}) => {


    const pageName = () => {
        return title !== undefined ? title : slug
    }
    
    
    const [Slider, carouselState, controls] = useCarousel(pageName())
    const [footerState, setFooterState] = useState(false)
    const [filterTags, setFilterTags] = useState([])
    const videoPlayerRef = useRef(null)

    const { current } = videoPlayerRef
    
    const hide = () => footerState && setFooterState(false)
    const show = () =>  !footerState && setFooterState(true)

    const handleTags = tags => {

        if(tags === undefined || !tags instanceof Array) return

        const resetTags = () => setFilterTags([])
        const updateTags = () => setFilterTags([...tags])

        return tags.length < 1 ? resetTags() : updateTags(tags)

    }
    const Controls = Media.controls

    const getGalleryMediaTags = blocks => {

        if(blocks === undefined) return

  
        const allGalleryMediaAndTags = []

        blocks.forEach(block => {
            let {media, tags} = block

            media.map(media => allGalleryMediaAndTags.push({
                ...media,
                tags: [...tags]
            }))
        })
      

        return allGalleryMediaAndTags

    }

       const renderIndicators = () =>{
        
        const { next, prev, setItem } = controls
        const { 
            activeSlide,
            currentPage,
            nextSlide, 
            previousSlide
        } = carouselState

        const getActiveId = slide => slide && slide.id
        const paginateNext = () => next({name: pageName(), ...nextSlide})
        const paginatePrev = () => prev({name: pageName(), ...previousSlide})
        const setId = (id) => setItem({name: pageName(), id})

        return (
            <Indicators 
                next={paginateNext}
                prev={paginatePrev}
                setId={setId}
                slides={currentPage}
                activeId={getActiveId(activeSlide)}
            />
        )
    }

    const renderAutoComplete = () => {
        
        const mediaAndTags = getGalleryMediaTags(blocks)
        const listOfTags = []
        mediaAndTags.forEach(media => media.tags.map(tag => listOfTags.push(tag.name.toLowerCase())))
        

        return <AutoComplete handleTags={handleTags} suggestionTags={listOfTags}/>

    }


    const renderFilters = (iconFilters) => {

        if(!filters) return
        const galleryFilters = iconFilters.filters
        const iconBoxes = galleryFilters.map((filter, i) => {
            return (
                <IconBox 
                    key={`${filter.icon}-i`} 
                    icon={filter.icon}
                    heading={filter.heading}
                />
            )  
        })
        
        return iconBoxes
    }

    const renderMedia = (blocks) => {

        if(blocks === undefined) return <div>Error Component Goes Here</div>

        const media = getGalleryMediaTags(blocks)
        const shouldFilterMedia = filterTags.length < 1
        const filterGalleryMediaByTags = ( media ) => media.filter( ({ tags }) => tags.find(tag => filterTags.includes(tag.name)))

        const filteredTags = shouldFilterMedia ? media : filterGalleryMediaByTags(media)

        console.log(filteredTags)

        const galleryMedia = filteredTags.map((media, i) => {
            
            return  <Media {...media} key={`${media.id} - ${i}` } getRef={videoPlayerRef}/>
        })
        return galleryMedia
    }

    return (
        <Section key={`${slug}-${fieldName}`} bg={`black`}>
            <PageContainer>
                <PageWrapper>
                    <CarouselWrapper>
                        <Slider name={pageName()}>
                            
                            {renderMedia(blocks)}
                        </Slider>
                    </CarouselWrapper>
                    <Container>
                        <Container className="flex items-center justify-start">
                            <ShareGallery/>
                            <Controls player={ current }/>
                        </Container>
                        {renderIndicators()}
                        <Filters>
                            <FilterIconsWrapper>
                                {renderFilters(filters)}
                            </FilterIconsWrapper>
                            <AutoCompleteWrapper>
                                {renderAutoComplete(blocks)}
                            </AutoCompleteWrapper>
                        </Filters>
                    </Container>
                    <MobileFooter active={footerState}>
                        <FooterButtonWrapper active={footerState}>
                            <GreyButton onClick={show}/>
                        </FooterButtonWrapper>
                        <Container>
                            <FooterHeadingWrapper>
                                    <FooterHeading heading={"Gallery Filter"}/>
                                    <FooterCloseBtn onClick={hide}/>
                                </FooterHeadingWrapper>
                                <FilterIconsWrapper className="mb-4">
                                    {renderFilters(filters)}
                                </FilterIconsWrapper>
                                <AutoCompleteWrapper className="mb-4">
                                    {renderAutoComplete()}
                                </AutoCompleteWrapper>
                                <ContactLinks grid={1} className="py-4 mb-2 font-semibold">
                                    REFRESH
                                </ContactLinks>
                        </Container>
                    </MobileFooter>
                </PageWrapper>
            </PageContainer>
        </Section>
    )
}
