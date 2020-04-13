import Qa from "../components/qa.js";
import styled from "styled-components";
import Ingredients from "../components/ingredients.js";

const StyledImgContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledText = styled.h2`
  z-index: 100;
  /* position: absolute; */
  color: green;
  font-size: 150px;
  font-weight: bold;
  left: 150px;
  top: 200px;
`;

export default (frontMatter) => {
  return ({ children: content }) => {
    return (
      <>
        <StyledImgContainer>
          <img
            src={`/recipe-header-img/${frontMatter.uuid}.jpg`}
            style={{ maxWidth: `100%` }}
          />
          <StyledText>{frontMatter.title}</StyledText>
        </StyledImgContainer>
        <Ingredients
          grain={frontMatter.grain_bill}
          hops={frontMatter.hops}
          yeast={frontMatter.yeast}
        />
        {content}
        <Qa />
      </>
    );
  };
};
