import { chunk } from "lodash"
import { wrap } from '@popmotion/popcorn';

export const handleChildren = ( settings ) =>{
    
    const { data, index, slideDirection, pageSize } = settings

    
    
    if(data === undefined) return "no data was provided"


    //validate if active index and carousel page size exits
    const pageSizeExist = pageSize === undefined
    const slideDirectionExist = slideDirection === undefined
    //If active index was passed to the function or set it to 0
    const activeIndex = index ? index : 0

    //set active data to active index or 0
    const activeSlide = data[activeIndex]

    //if page was size was passed to function set it else set it to 9
    const carouselPageSize = pageSizeExist ? 9 : pageSize


    //divide pages in chunks based on the carousel page size
    const pages = chunk(data, carouselPageSize)

    //ref https://popmotion.io/popcorn/api/wrap/
    // using popmotion wrap function create paginate function
    const paginate = ( direction ) => wrap(0, data.length, activeIndex + direction)

    const direction = slideDirectionExist ? 1 : slideDirection

    //get current page index
    const currentPageIndex = pages.findIndex(page => page.find(page => page === activeSlide))
    
    //current page
    const currentPage = pages[currentPageIndex]


    return {
        data,
        pages,
        activeIndex,
        paginate,
        activeSlide,
        currentPageIndex,
        currentPage,
        direction,
        nextSlide: {
            index: paginate(1),
            slideDirection: 1
        },
        previousSlide: {
            index: paginate(-1),
            slideDirection: -1
        }
    }

}