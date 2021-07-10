import React, { useEffect, useRef, useState } from 'react'
import { Popper } from '../popper'
import TagsInput from './style/tagInput'
import { PopoverMenu } from '../../elements';






export const AutoComplete = React.forwardRef(function TagInput({
    
   
    suggestionTags,
    handleTags
    
},ref){

const [visible, setVisible] = useState(false)
const [selectedTags, setSelectedTags] = useState([])
const [results, setResults] = useState([])

const input = useRef("")
const SearchTagIcom = useRef("")

const resetResults = () => setResults([])
const resetInput = input => input.current.value = null
const handleResults = suggestions => setResults([...suggestions])

const show = () => setVisible(true)
const hide = () => setVisible(false)


const getSuggestions = () => {
    if(suggestionTags === undefined) return []

    const rmDuplicates = new Set([...suggestionTags] || [])

    return Array.from(rmDuplicates)
}


const handleSelectedTags = (tag) => {

    if(tag === undefined || tag === null) return

    const shouldAddTag = !selectedTags.includes(tag)

     shouldAddTag && setSelectedTags([...selectedTags, tag])
   

}

const removeUserTag = tag => {

    if(tag === undefined || tag === null) return

    const filterTag = selectedTags.filter(selectedTag => selectedTag !== tag)

    return setSelectedTags([...filterTag])

}

const handleKeyUp = (event, input) => {

    const autoCompleteSuggetions = getSuggestions()
    const inputValue = input.current.value
    

    //validations
    const isUserInputNull = inputValue === null
    const inputValLength = input.current.value.length
    const shouldUpdateSelectedTags = event.key === "Enter" || event.type === "click"
    const shouldCheckAutoComplete = autoCompleteSuggetions.length > 0 &&  inputValLength > 2
    const shouldResetResults = inputValLength <= 2

      if(isUserInputNull) return false
   
      if( shouldUpdateSelectedTags ){
          handleSelectedTags(inputValue)
          return resetInput(input)
      }

      if(shouldResetResults) return resetResults()
        
      if(shouldCheckAutoComplete){
        
        const autoCompleteResults = autoCompleteSuggetions.filter(suggest => suggest.indexOf(inputValue.toLowerCase()) > -1)

        const suggesstionFound = autoCompleteResults.length > 0

        return suggesstionFound ? handleResults(autoCompleteResults) : resetResults()

      }

}



useEffect(() => { results.length > 0 ? show() : hide() },[results] )
useEffect(() => { handleTags(selectedTags) },[selectedTags] )

const renderResults = (results) => {
   return <PopoverMenu data={results} onClick={handleSelectedTags}/>
}
  
    return(

        <Popper
            hide={hide}
            show={show}
            visible={visible}
            html={
                <>
                    {renderResults(results)}
                </>
            }
        >
            <TagsInput className="tags-input" ref={ref}>
                <TagsInput.Tags id="tags">
                    {selectedTags.map((tag, index)=>(
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
        </Popper>
    )
})
