import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 5px 10px 60px rgba(170, 111, 81, 0.1);
`;

export const ImageWrapper = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f3f3f3;
  width: 100%;
  height: 250px;
`;

export const InfoList = styled.div`
  padding: 20px 40px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-family: Quicksand;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
  margin: 0;
`;

export const Description = styled.p`
  font-family: Quicksand;
  font-weight: 400;
  font-size: 22px;
  line-height: 40px;
  margin: 0;
`;

export const Price = styled.h4`
  font-family: Quicksand;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
`;

export const Tags = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;

  margin: -5px;
`;

export const OneTag = styled.li`
  color: #fff;
  background-color: #aa6f51c7;

  padding: 3px 5px;
  border-radius: 4px;

  margin: 5px;
`;

export const RatingWrapper = styled.div`
  margin-top: 20px;
`;

export const RateNumber = styled.span`
  font-family: Quicksand;
  font-weight: 700;
  font-size: 22px;
  margin: 0;
  margin-left: 10px;
`;

export const RateNumberLabel = styled.h5`
  font-family: Quicksand;
  font-weight: 700;
  font-size: 22px;
  margin: 0;
  display: flex;
  margin-bottom: 20px;
`;
