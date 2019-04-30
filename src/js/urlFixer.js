
export default function urlFixer(url) {
  const parsedUrl = url.split('.co/');
  return `/${parsedUrl[1]}`;
}
