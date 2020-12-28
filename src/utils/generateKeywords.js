import createKeywords from "./createKeywords";

export default values => {
  const [title] = values;

  const keywordTitleWithoutDots = [];
  const keywordTitle = createKeywords(title);

  keywordTitle.forEach(el => keywordTitleWithoutDots.push(el.replace(/[^a-zA-Z0-9 ]/g, "")));

  return [...new Set(["", ...keywordTitle, ...keywordTitleWithoutDots])];
};
