import styled from "styled-components";
import react from 'react';

interface TagProps {
    checked: boolean;
}
const Tag = styled.div<TagProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 1.5rem;
    border-radius: 5px;
    min-width: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    cursor: pointer;
    background-color: ${({checked}) => `${checked? `var(--tag-checked)` : `var(--tag)`}`}
`;

const TagText = styled.span`
    margin-right: auto;
    margin-left: auto;
`;

interface CityTagProps {
    name: string;
    checked: boolean;
    onClick: ()=>void;
}

const CityTag: React.FC<CityTagProps> = ({name, checked, onClick}) => {
    return (
    <Tag onClick = {onClick} checked={checked}>
        <TagText>
            {name}
        </TagText>
    </Tag>
    )
}

export default CityTag;