const { GATSBY_CMS } = process.env;
export default function urlFixer(url) {
  const parsedUrl = url.split(`${GATSBY_CMS}/`);
  return `/${parsedUrl[1]}`;
}
