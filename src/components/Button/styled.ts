import styled from 'styled-components';

export const ContainerButton = styled.button`
  background-color: ${({ theme }) => theme.BLACK_100};
  > p {
    color: ${({ theme }) => theme.WHITE} ;
  }
`;
