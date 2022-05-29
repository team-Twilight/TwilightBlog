import React, { useState } from "react";

type ChildData = {
    title:string;
    link: string;
}

type OpenableMenuProps = {
    parentName:string;
    childs : ChildData[];
}

/**
 * 메뉴가 열리는 2단 책상 메뉴다 
 * 기본적으로 좌우에 배치하는 용도인데 음
 */
const OpenableMenu:React.FC<OpenableMenuProps> = ({parentName, childs}) => {
    const [isOpen, setIsOpen] = useState(false); // TODO 언젠가는 default 값을 바꿀 수 있어야한다 
    
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <h1 onClick={toggleIsOpen}>{parentName}</h1>
            <ul>
                {childs.map((value, idx)=> {
                    return (
                        <li key={idx}>{value.title}</li>
                    )
                })}
            </ul>
        </>
    );
}


export default OpenableMenu;