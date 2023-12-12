import { marked } from "marked";

export const richTextReducer = (rawRichtext) => {
  const parsedRichText = marked.parse(rawRichtext);
  let styledRichText = parsedRichText.replace(
    "<ul>",
    "<ul style='list-style-type: circle;'>"
  );
  return styledRichText;
};
