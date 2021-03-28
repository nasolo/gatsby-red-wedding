import React, { useState, useMemo } from 'react'
import { Section } from '../../elements/section';
import { Media } from '../../components/media';
import { AutoComplete, Carousel, IconBox } from '../../components';
import { Indicators } from './components/controls';
import { carouselSelector } from '../../components/carousel/utils/redux/selectors'
import { shallowEqual, useSelector } from 'react-redux';
import { Container } from '../../elements';
import { 
        PageWrapper, 
        PageContainer, 
        CarouselWrapper,
        Filters, 
        FilterIconsWrapper, 
        AutoCompleteWrapper,
        MobileFooter
    } from './style' 
import { ShareGallery } from './components/share';
import MobileMenu from './components/footer';

export const Gallery = ({
    page: {title, slug},
    blocks,
    fieldName,
    filters
}) => {


    
    
    const [controls, setControls] = useState({})
    const makeGetAllCarouselData = useMemo(carouselSelector, [])

    const getControls = data => {
        if(!data) return
        return setControls({...data})
    }

    const pageName = () => {
        return title !== undefined ? title : slug
    }

    const carouselState = useSelector(state => makeGetAllCarouselData(state, pageName()), shallowEqual)

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

        return <AutoComplete />

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

        const galleryMedia = blocks.map((pageMedia, i) => {

            let { media } = pageMedia

            return media.map((media, i) => <Media {...media} key={`${media.id} - ${i}` }/>)

        })

        return galleryMedia
    }


    return (
        <Section key={`${slug}-${fieldName}`} bg={`black`}>
            <PageContainer>
                <PageWrapper>
                    <CarouselWrapper>

                        <Carousel name={pageName()} controls={getControls}>
                            {renderMedia(blocks)}
                        </Carousel>

                    </CarouselWrapper>
                    <Container>

                        <ShareGallery/>
                        {renderIndicators()}

                        <Filters>

                            <FilterIconsWrapper>
                                {renderFilters(filters)}
                            </FilterIconsWrapper>

                            <AutoCompleteWrapper>
                                {renderAutoComplete()}
                            </AutoCompleteWrapper>

                        </Filters>
                    </Container>

                    <MobileFooter>
                        <Container>
                            <MobileMenu/>
                        </Container>
                    </MobileFooter>

                </PageWrapper>
            </PageContainer>
        </Section>
        
    )
}
