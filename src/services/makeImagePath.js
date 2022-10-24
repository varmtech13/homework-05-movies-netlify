import noImage from '../images/no-image.jpg';

export function makeImagePath(path, size = 'w342') {
  if (!path) return noImage;
  return `https://image.tmdb.org/t/p/${size}/${path}`;
}

export function makeAvavtarPath(path) {
  if (!path) return noImage;
  return `${path.slice(1)}`;
}
