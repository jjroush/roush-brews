import Qa from '../components/qa.js'
import styled from 'styled-components'



const StyledImgContainer = styled.div`
position: relative;
    width: 100%;
`;

const StyledImage = styled.img.attrs({
    src: '/1080-placeholder.jpg'
})`
    /* position: absolute;
    left: 0;
    top: 0; */
    max-width: 100%;
`;

const StyledText = styled.h2`
    z-index: 100;
    position: absolute;
    color: white;
    font-size: 24px;
    font-weight: bold;
    left: 150px;
    top: 350px;
`;

export default frontMatter => {
    return ({ children: content }) => {
        return (
            <>
                <StyledImgContainer>
                    <StyledImage />
                    <StyledText>{'test'}</StyledText>
                </StyledImgContainer>
                <h1>{frontMatter.title}</h1>
                {content}
                <Qa />
            </>
        )
    }
}