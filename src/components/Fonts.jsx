import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
  @font-face {
    font-family: "Sohne";
    src: local("CustomFont2Name"),
      url("./fonts/TestSöhne-Buch.otf") format("woff"),
  }
  @font-face {
    font-family: "Sohne";
    src: local("CustomFont2Name"),
      url("./fonts/TestSöhne-Dreiviertelfett.otf") format("woff2"),
  }`}
  />
);

export default Fonts;
