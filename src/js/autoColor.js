import { colors } from '../styles/utilities/settings';

export default function panelColors(index) {
  let color = colors.orange;
  if (index === 1) {
    color = colors.blue;
  } else if (index === 2) {
    color = colors.green;
  }
  return color;
}

export function pageColor(theme, defaultColor) {
  let color = defaultColor;

  if (theme === 'green') {
    color = colors.green;
  } else if (theme === 'blue') {
    color = colors.blue;
  } else if (theme === 'navy') {
    color = colors.darkerBlue;
  } else if (theme === 'orange') {
    color = colors.orange;
  } else {
    color = defaultColor;
  }
  return color;
}
