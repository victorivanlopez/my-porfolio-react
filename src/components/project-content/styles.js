import styled from 'styled-components';

export const ContainerProject = styled.div`
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  font-size: 1.5rem;
`;

export const GridProject = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 4rem;
  margin: 2rem 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContentProject = styled.div`
  p {
    margin-bottom: 1.5rem;
  }
`;

export const DescriptionProject = styled.div`
  ul {
    list-style: disc;
    padding: 0 1rem 1.5rem 1rem;
  }
`;

export const DetailsProject = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  li {
    
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
    &:last-of-type {
    border-bottom: 0;
    }
    p {
      margin: 0;
      padding: 1rem 0;
    }
    span {
      font-weight: 700;
    }
  }
`;

export const LinksProject = styled.div`
  display: flex;
  gap: 2rem;
  a {
    padding: 0;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grayDark};
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;