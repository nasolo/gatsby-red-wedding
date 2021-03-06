
import { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types';
import { carouselSelector } from '../../components/carousel/utils/redux/selectors'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { bindedActions } from '../../components/carousel/utils/redux/actionCreators'
import { Carousel } from '../../components';
import { activeVideo } from '../../components/videoPlayer/redux/selectors';





export const useCarousel = ( pageName ) => {

    const [name, setName] = useState("")
    
 
    const dispatch = useDispatch()
    const makeGetAllCarouselData = useMemo(carouselSelector, [])
    const state = useSelector(state => makeGetAllCarouselData(state, name), shallowEqual)
    const activePlayer = useSelector( state => activeVideo( state ), shallowEqual )

    const actions = bindedActions(dispatch)

    useEffect(() => {
        name === "" && pageName && setName(pageName)
    }, state)

    return [ Carousel, { ...state, activePlayer}, actions ]
}


useCarousel.PropTypes ={
    pageName: PropTypes.string
}