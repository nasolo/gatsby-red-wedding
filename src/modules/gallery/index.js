import React, { useState, useMemo } from 'react'
import { Section } from '../../elements/section';
import { Media } from '../../components/media';
import { Carousel } from '../../components';
import { Indicators } from './components/controls';
import { carouselSelector } from '../../components/carousel/utils/redux/selectors'
import { shallowEqual, useSelector } from 'react-redux';
import { Container } from '../../elements';
import { PageWrapper, PageContainer, CarouselWrapper } from './style' 
import { ShareGallery } from './components/share';

export const Gallery = ({ page }) => {

    
    const [controls, setControls] = useState({})
    const makeGetAllCarouselData = useMemo(carouselSelector, [])


    const {
        title,
        slug,
        pageBlocks: { 
            pageBlockFields
        }
    } = page

    const getControls = data => {
        if(!data) return
        return setControls({...data})
    }

    const pageName = () => {
        return title !== undefined ? title : slug
    }

    const carouselState = useSelector(state => makeGetAllCarouselData(state, pageName()), shallowEqual)

    const getPageBlocks = blocks => {
        if(blocks === undefined || !blocks instanceof Array) return

        let galleryBlocks = []

        blocks.map(block => 
            block.gallery.page_galleries.gallery
            .forEach(gallery => 
                galleryBlocks.push(gallery)))

        return galleryBlocks
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

    const renderMedia = (pageBlocks) => {
        const galleryBlocks = getPageBlocks(pageBlocks)

        return galleryBlocks.map((pageMedia, i) => {

            let { media } = pageMedia

            return media.map((media, i) => <Media {...media} key={`${media.id} - ${i}` }/>)

        })
    }


    return (
        <Section key={slug} bg={`black`}>
            <PageContainer>
                <PageWrapper>
                    <CarouselWrapper>
                        <Carousel name={pageName()} controls={getControls}>
                            {renderMedia(pageBlockFields)}
                        </Carousel>
                    </CarouselWrapper>
                    <Container>
                        <ShareGallery/>
                        {renderIndicators()}
                    </Container>
            </PageWrapper>
        </PageContainer>
        </Section>
        
    )
}
