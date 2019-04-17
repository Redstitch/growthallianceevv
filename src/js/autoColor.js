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
