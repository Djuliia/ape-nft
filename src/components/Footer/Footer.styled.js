import styled from "styled-components";

export const Container = styled.div`
margin-top: 60px;
margin-bottom: 24px;
@media screen and (min-width: 768px) {
    margin-top: 80px;
margin-bottom: 40px;
} 

@media screen and (min-width: 1280px) {
    margin-top: 120px;
} 
`

export const Text = styled.p`
margin: 0 auto;
width: 216px;
font-family: Messina Sans Mono;
font-size: 12px;
line-height: 1.167;
text-transform: uppercase;
text-align: center;
@media screen and (min-width: 768px) {
    width: 100%;
}
`
