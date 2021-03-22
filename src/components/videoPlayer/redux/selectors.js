import { create } from "lodash"
import { createSelector } from "reselect"



const selectPlayerConfig = state => state.videoReducer



export const getPlayerProps = createSelector(
    selectPlayerConfig,
    (_, id) => id,
    (config, id) => {
        return config[id]
    }
)

export const activeVideo = createSelector(
    selectPlayerConfig,
    (media) => {
        const { activeVideo } = media

        const id = activeVideo.id
       
        return media[id] ?  media[id] : media
    }
)
