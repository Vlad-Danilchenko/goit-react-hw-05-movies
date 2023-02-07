import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ReviewsItem = styled.li`
  padding: 12px;
  margin-bottom: 12px;
  background: #1f1f1f;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ReviewsText = styled.p`
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.011em;

  color: #ffffff;

  opacity: 0.56;
`;
