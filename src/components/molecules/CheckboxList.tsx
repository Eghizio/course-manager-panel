import React from "react";
import styled from "styled-components";
import { Course } from "../../types/student";

export type ListItem = Course;
export interface CheckboxListProps{
    items: ListItem[];
    setChecked: React.Dispatch<React.SetStateAction<ListItem[]>>
}

const CheckboxList: React.FC<CheckboxListProps> = ({ items, setChecked }) => {
    
    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, item: ListItem) => {
        if(event.target.checked) setChecked(prev => [...prev, item]);
        else setChecked(prev => prev.filter(el => el.id !== item.id));
    };

    return (
        <List>
            {items.map(item =>
                <ListItem key={item.id}>
                    <label>
                        <input type="checkbox" name={item.title} onChange={(e) => handleCheck(e, item)}/>
                        <span>{item.title}</span>
                    </label>
                </ListItem>
            )}
        </List>
    );
};

// style and make scrollable, sizes?
const List = styled.ol`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const ListItem = styled.li`

`;

export default CheckboxList;