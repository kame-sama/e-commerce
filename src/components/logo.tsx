import styled from 'styled-components';

export const Logo = function () {
  return (
    <Wrapper>
      <svg width="200" height="70" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0" y="0" />
        <Brand x="100" y="30">
          E-commerce
        </Brand>
        <Motto x="100" y="65">
          web store for everyone
        </Motto>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
`;

const Rect = styled.rect`
  fill: ${(p) => p.theme.colors.primary};
  width: 200px;
  height: 50px;
`;

const Text = styled.text`
  font-family: ${(p) => p.theme.fonts.raleway};
  text-anchor: middle;
`;

const Brand = styled(Text)`
  fill: ${(p) => p.theme.colors.primaryText};
  font-size: 25px;
  font-weight: ${(p) => p.theme.fontWghts.bold};
`;

const Motto = styled(Text)`
  fill: ${(p) => p.theme.colors.primary};
  font-size: 15px;
  font-weight: ${(p) => p.theme.fontWghts.medium};
`;
