import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link) `
    background: ${({ primary }) => (primary ? '#7eb7f4' :
    'CD853F')};

    white-space: nowrap;
    outline: none;
    border: none;
    border-radius: 18px;
    min-width: 100px; 
    max-width: 200px; 
    cursor: pointer; 
    text-decoration: none; 
    transiation: 0.3s; 
    display: flex;
    justify-conent: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#2f3847' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '14px')};
    font-weight: bold;
    
    &:hover {
        transform: translateY(-2px);
    }
`
