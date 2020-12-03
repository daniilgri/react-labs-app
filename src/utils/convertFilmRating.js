export default rates => {
  return rates.reduce((res, curVal) => res + curVal.rate, 0) / rates.length;
};
