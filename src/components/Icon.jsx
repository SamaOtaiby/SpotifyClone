// A single component that returns the right SVG based on a "name" prop.
// This is a common React pattern: instead of a separate file per icon,
// one component + a switch keeps things easy to find and reuse.

const paths = {
  home: 'M12 2 2 10h3v10h6v-6h2v6h6V10h3L12 2z',
  search: 'M10 2a8 8 0 105.29 14.29l4.7 4.7 1.42-1.41-4.7-4.7A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z',
  library: 'M4 3h2v18H4V3zm5 0h2v18H9V3zm6 1 4 17-2 .5L13 4.5 15 4z',
  plus: 'M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z',
  heart: 'M12 21s-7.5-4.6-10-9.3C.6 8.4 2.3 5 5.7 5 8 5 9.6 6.4 12 9c2.4-2.6 4-4 6.3-4 3.4 0 5.1 3.4 3.7 6.7C19.5 16.4 12 21 12 21z',
  logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm4.6 14.4a.6.6 0 01-.8.2c-2.3-1.4-5.2-1.7-8.6-1a.6.6 0 11-.3-1.2c3.7-.8 6.9-.5 9.5 1.1a.6.6 0 01.2.9zm1.2-2.7a.75.75 0 01-1 .3c-2.6-1.6-6.6-2.1-9.7-1.1a.75.75 0 11-.4-1.4c3.5-1.1 7.9-.5 10.9 1.3a.75.75 0 01.2 1zm.1-2.8C14.7 9 9.3 8.8 6.2 9.8a.9.9 0 11-.5-1.7c3.6-1.1 9.5-.9 13.2 1.3a.9.9 0 01-.9 1.5z',
};

export default function Icon({ name, size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
