import { ErrorMessage, Field } from "formik";
import styled from "styled-components";
import { theme } from "theme";

export const TextWrap = styled.div `
margin : 0 auto;
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
width: 216px;
text-transform: uppercase;
@media screen and (min-width: 768px) {
    gap: 24px;
    width: 397px;
  }
  @media screen and (min-width: 1280px) {
    gap: 40px;
    width: 581px;
}
`
export const Text = styled.p`
font-family: Messina Sans Mono;
font-size: 16px;
line-height:1.188;
text-align: center;

@media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height:1.208;
}
`

export const Btn = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 10px 12px 12px;
width: 216px;
border-radius: 12px;
backdrop-filter: blur(12px);
background: ${theme.colors.accent};
border: none;
color: ${theme.colors.primary};
font-size: 16px;
font-weight: 900;
line-height: 1.188;
text-transform: uppercase;
outline: none;

&:hover {
    color: ${theme.colors.secondary};
}

@media screen and (min-width: 768px) {
    width: 247px;
  }

@media screen and (min-width: 1280px) {
    width: 397px;
    padding: 16px 20px 20px;
    font-size: 38px;
    line-height: 1.214;
}
`

export const StyledInput = styled(Field) `
padding: 22px 24px;
width: 168px;
height: 48px;
box-sizing: border-box;
border: 1px solid ${theme.colors.secondary};
border-radius: 0px 8px 8px 0px;
background-color: ${theme.colors.secondary};
font-family: Messina Sans Mono;
font-size: 12px;
font-weight: 400;
line-height: 1.167;
color: ${theme.colors.primary};
text-transform: uppercase;
outline: none;

&:not(:placeholder-shown){
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
}
&.error {
    border: 1px solid ${theme.colors.accent};
    margin-bottom: 0px;
}
&:focus {
    border: 1px solid #fff;
}


@media screen and (min-width: 768px) {
    width: 200px;

}
@media screen and (min-width: 1280px) {
    width: 333px;
    height: 64px;
    border-radius: 0px 12px 12px 0px;  
    font-size: 16px;
    line-height: 1.188;
}
`

export const SvgWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px 0px 0px 12px;
backdrop-filter: blur(12px);
background-color: ${theme.colors.secondary};
width: 48px;
height: 48px;
@media screen and (min-width: 1280px) {
    width: 64px;
    height: 64px;
}
`

export const InputWrap = styled.div`
display: flex;
justify-content:center;
align-items: center;
margin-bottom: ${({$isError})=> $isError? '0px' : '16px'};
@media screen and (min-width: 1280px) {
    margin-bottom: ${({$isError})=> $isError? '0px' : '24px'};
}
`

export const ErrorMsg = styled(ErrorMessage) `
color: ${theme.colors.accent};
text-align: end;
font-family: Messina Sans Mono;
font-size: 10px;
font-weight: 400;
line-height: 1.2;
margin-top: 2px;
margin-bottom: 8px;

@media screen and (min-width: 1280px) {
    font-size: 12px;
line-height: 1.167;
}
`