
export default function urlFixer(url) {
  const parsedUrl = url.split('/cms/');
  return `/${parsedUrl[1]}`;
}
