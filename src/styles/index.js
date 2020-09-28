import styled from 'styled-components';

export const StyledImg = styled.img`
  height: 100px;
  margin-right: 20px;
  width: 100px;
`;

export const StyledProfileImg = styled(StyledImg)`
  border-radius: 10px;
  height: 320px;
  width: 250px;
`;

export const StyledSocialsImg = styled(StyledImg)`
  height: 80px;
  width: 80px;
`;

export const Technologies = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 118px 0;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledApp = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledSocials = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledParagraph = styled.p`
  margin: 10px 0 10px 0;
  display: flex;
  align-items: center;
`;

export const StyledHobbies = styled(StyledContent)``;

export const StyledTechnologies = styled(StyledContent)``;

export const StyledSpan = styled.span`
  font-size: 30px;
`;

export const StyledDescription = styled(StyledParagraph)`
  width: 250px;
`;
