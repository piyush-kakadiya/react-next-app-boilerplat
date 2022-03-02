/**
 * Specify which style objects to return.
 * @param {Object.<string, SerializedStyles>} styles
 * @param {Object.<string, boolean>} choices
 * @returns {Array<SerializedStyles>}
 */
export function cx(styles: any, choices: any) {
  let themedStyles: any = [];
  let basicStyles: any = [];

  for (const [name, style] of Object.entries(styles)) {
    if (choices && !choices[name]) continue;
    else if (typeof style === "function") themedStyles.push(style);
    else basicStyles.push(style);
  }

  if (themedStyles.length) {
    return (theme: any) => themedStyles.map((style: any) => style(theme)).concat(basicStyles);
  } else {
    return basicStyles;
  }
}