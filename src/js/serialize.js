export default function serialize(formObj) {
  let submitString = '';
  const objectLength = Object.keys(formObj).length;

  // console.log(Object.keys(formObj));
  // console.log(Object.values(formObj));

  Object.keys(formObj).forEach((element, index) => {
    submitString += `${element}=${Object.values(formObj)[index]}${objectLength === index + 1 ? '' : '&'}`;
  });

  return submitString;
}
