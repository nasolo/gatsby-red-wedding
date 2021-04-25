import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Icon } from '../../components'




 const MenuList = styled.ul`
    ${ tw`
            list-none
            text-left
            m-0
        `
    }
`


 const MenuListItem = styled.li`
    ${tw`leading-8 m-0`}
`

const Menulinks = styled.button`
    ${tw`
        text-white
        font-semibold
        cursor-pointer
        focus:outline-none
    `}
`
export const PopoverMenu = ({data, onClick}) =>{

    const handleOnClick = val => onClick(val)

    return(
        <MenuList>
            {data.map((data) => 
            (<MenuListItem>
                <Menulinks onClick={()=>handleOnClick(data.text === undefined ? data : data.text)}>
                    {data.icon && <Icon icon={data.icon}/>}
                    {data.text && data.text}
                    {data}
                </Menulinks>
            </MenuListItem>)
            )}
        </MenuList>
    )

}

