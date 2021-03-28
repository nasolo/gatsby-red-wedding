import React, { useEffect, useRef } from 'react'

import TagsInput from './style/tagInput'





export const AutoComplete = React.forwardRef(function TagInput({
    
    onClick, 
    setTags, 
    suggetions, 
    suggetionsFound, 
    setSuggetionsFound,
    isOpen
},ref){
    
const input = useRef("")
const SearchTagIcom = useRef("")

const tags = ["adsfaws", "adfsadf"]


const handleIsOpen = bol => console.log(bol)
const autosuggetions = []
const handleKeyUp = val => console.log(val)
const removeUserTag = tag => console.log(tag)


    useEffect(() => {
        const userInput = input.current.value
         userInput === "" && handleIsOpen(false)
         autosuggetions.length < 1 && handleIsOpen(false)
         userInput.length < 2 && handleIsOpen(false)

         

         userInput.length > 1 & isOpen === false & autosuggetions.length > 0 & autosuggetions !== [] && handleIsOpen(true)

    }, [input.current.value, autosuggetions, isOpen])

  
    return(

        <TagsInput className="tags-input" onClick={onClick} ref={ref}>
            <TagsInput.Tags id="tags">
                {tags.map((tag, index)=>(
                    tag.length > 0 && <TagsInput.TagItem className="tag" key={index}>
                    <TagsInput.TagTitle className="tag-title">
                        {tag}
                    </TagsInput.TagTitle>
                    <TagsInput.CloseIcon className="tag-close-icon"
                        onClick={()=> removeUserTag(tag)}
                    >
                            x
                    </TagsInput.CloseIcon>
                    </TagsInput.TagItem>
                ))}
            </TagsInput.Tags>
            
            <TagsInput.Input
            ref={input}
            onKeyUp={(event)=>handleKeyUp(event, input)} 
            placeholder="Press Enter to add tags"
            />
            <TagsInput.SearchIcon ref={SearchTagIcom} icon="magnifyingglass" onClick={(event)=>handleKeyUp(event, input)}/>
        </TagsInput>
    )
})
