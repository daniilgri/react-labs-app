export default ({ rates, userUid }) => {
  const curUserRate = rates.filter(rate => rate.userUid === userUid);
  return curUserRate.length > 0 ? curUserRate[0].rate : 0;
};
