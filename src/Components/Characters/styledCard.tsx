import styled from 'styled-components';

export const Col = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 25%;
  }

  flex: 0 0 auto;
`;

export const Card = styled.div`
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 1rem;
  flex: 1 1 auto;
`;

export const CardTitle = styled.h5`
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const CardText = styled.p`
  margin-bottom: 1rem;
`;