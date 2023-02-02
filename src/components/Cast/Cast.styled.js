import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 54px);
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  grid-gap: 8px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 15px 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  padding-bottom: 4px;
  background: #1f1f1f;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const CastImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const CastText = styled.p`
  margin: 0;
  /* display: block; */
  text-align: center;
  text-decoration: none;

  /* font-family: 'Poppins'; */
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.011em;

  color: #ffffff;

  opacity: 0.56;
`;
