import { JSX } from 'react';

// only do this for componetents that aren't top level
const styles = {
  background: 'url(\'/bg.jpg\') repeat center center',
  filter: 'drop-shadow(black 0 0 10px)', // requires a somewhat modern browser
  height: '100dvh', // see https://www.youtube.com/watch?v=ru3U8MHbFFI
  overflow: 'hidden',
};

export default function Sidebar(props: { children: JSX.Element }) {
  return (
    <aside style={styles}>{props.children}</aside>
  );
}
