export default rates => {
  return Math.round(rates.reduce((res, curVal) => res + curVal.rate, 0) / rates.length);
};
