/*variable maker*/
const variableFactory = (varDeclaration) => {
  return {
    name: varDeclaration.slice(0, varDeclaration.indexOf(":")),
    value: varDeclaration.slice(varDeclaration.indexOf(":") + 1),
  };
};

/*dark mode colors*/
const darkModeColors = {
  background: variableFactory("--page-background-color: #0e141b"),
  text: variableFactory("--page-text-color: #ccd8e5"),
  line: variableFactory("--page-line-color: #d9e2ec"),
};

/*light mode colors*/

const lightModeColors = {
  background: variableFactory("--page-background-color: #ccd8e5"),
  text: variableFactory("--page-text-color: #0e141b"),
  line: variableFactory("--page-line-color: #0e141b"),
};

export { darkModeColors, lightModeColors };
