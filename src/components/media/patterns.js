export const IMAGE_EXTENSTIONS = /\.(ico|cur|apng|heif|raw|webp|bmp|gif|jpe|pjpeg|jpeg|jpg|jfif|svg|pjp|tif|tiff|png)($|\?)/i


const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/;

const MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;

const MATCH_URL_VIMEO = /vimeo\.com\/.+/;

const MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;

const MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;

const MATCH_URL_WISTIA = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/;

const MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;

const MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;

const MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;

var MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;

var MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/;

var AUDIO_EXTENSIONS = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;

var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;

var HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;

var DASH_EXTENSIONS = /\.(mpd)($|\?)/i;

export const VIDEO_PLAYER_EXTENSIONS = {

    MATCH_URL_YOUTUBE,
    MATCH_URL_SOUNDCLOUD,
    MATCH_URL_VIMEO,
    MATCH_URL_FACEBOOK,
    MATCH_URL_STREAMABLE,
    MATCH_URL_WISTIA,
    MATCH_URL_TWITCH_VIDEO,
    MATCH_URL_TWITCH_CHANNEL,
    MATCH_URL_DAILYMOTION,
    MATCH_URL_MIXCLOUD,
    MATCH_URL_VIDYARD,
    AUDIO_EXTENSIONS,
    VIDEO_EXTENSIONS,
    HLS_EXTENSIONS,
    DASH_EXTENSIONS
}



export const validateExtension = exp =>{
    const expr = Object.values(VIDEO_PLAYER_EXTENSIONS)
    return expr.reduce((prev, next) => {     
         if(next.test(exp)){
             return prev = true
         }
         return prev
     }, false)
 }
 
 export const canPlay = (url) =>{
     if(url instanceof Array){
         for(let item of url){
             if(typeof item === 'string' && validateExtension(url)){
                 return true
             }
         }
     }
 
     if(typeof url === 'string'){
         return validateExtension(url)
     }
 
     return false
     
 }
 