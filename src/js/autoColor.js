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

export function pageColor(theme) {
  let color = '';
  if (theme === 'green') {
    color = colors.green;
  } else if (theme === 'blue') {
    color = colors.blue;
  } else if (theme === 'navy') {
    color = colors.navy;
  } else if (theme === 'orange') {
    color = colors.orange;
  } else {
    color = colors.navy;
  }
  return color;
}
