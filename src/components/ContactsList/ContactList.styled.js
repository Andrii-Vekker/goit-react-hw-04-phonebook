
import styled from 'styled-components';

export const Label = styled.label`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start
`;

export const FilteredInput = styled.input`
width: 200px;
height: 20px;
margin-top: 10px;
background-color: #fff;
:hover, :focus {
   border: 2px solid skyblue;
}
`

export const Span = styled.span`
font-size: 20px;
margin-bottom: 10px;
`

export const List = styled.ul`
list-style: none;
padding: 0;
font-size: 25px

`

export const Item = styled.li`
font-size: 20px;
width: 400px;
margin-bottom: 8px;
display: flex;
justify-content: space-between;
justify-content: baseline
`
