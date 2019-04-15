const { GATSBY_IMGIX } = process.env;

export default function imageFixer(url) {
  const parsedUrl = url.split('/uploads/');
  return `${GATSBY_IMGIX}/${parsedUrl[1]}`;
}
