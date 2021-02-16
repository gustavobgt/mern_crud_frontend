import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: FT;
  border-top: 2px solid #D9534F;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h4`
`;

export const SocialMedia = styled.a`
`;