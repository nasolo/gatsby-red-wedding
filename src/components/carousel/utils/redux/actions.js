import { createAction } from '@reduxjs/toolkit'
import carouselConstants from './constants'


const {
    PAGINATE_NEXT,
    PAGINATE_PREV,
    SETACTIVEITEM,
    LOADCAROUSELDATA,
    SETFILTERTAGS,
    RESETFILTERS
} = carouselConstants


export const nextItem = createAction(PAGINATE_NEXT)
export const prevItem = createAction(PAGINATE_PREV)
export const setActiveItem = createAction(SETACTIVEITEM)
export const load = createAction(LOADCAROUSELDATA)
export const setFilterTags = createAction(SETFILTERTAGS)
export const resetFilterTags = createAction(RESETFILTERS)


