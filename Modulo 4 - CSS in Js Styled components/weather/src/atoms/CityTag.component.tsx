import styled from "styled-components";
import react from 'react';


const Tag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 1.5rem;
    border-radius: 5px;
    width: 10rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    background-color: var(--tag);
`;

const TagText = styled.span`
    margin-right: auto;
    margin-left: auto;
`;

interface CityTagProps {
    name: string;
}

const CityTag: React.FC<CityTagProps> = ({name}) => {
    return (
    <Tag>
        <TagText>
            {name}
        </TagText>
    </Tag>
    )
}

export default CityTag;