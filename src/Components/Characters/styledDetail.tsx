import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1140px;
  margin: 2rem auto 0 auto; /* mt-4 */
  padding: 0 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -15px;
  margin-right: -15px;
`;

export const Col = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: #fff;
`;

export const CardInner = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 100%;
  display: flex;

  @media (min-width: 768px) {
    flex: 0 0 33.3333%;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const CardTitle = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  margin-bottom: 0.5rem;
`;