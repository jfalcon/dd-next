import type { FC, PropsWithChildren } from 'react';

// only do this for componetents that aren't top level, also leave
// outside the component to avoid re-executing every render
const styles = {
  background: 'url("/soldier.png") no-repeat bottom center, url("/bg.jpg") repeat center center',
  backgroundSize: '50%, auto',
  filter: 'drop-shadow(black 0 0 10px)', // requires a somewhat modern browser
  height: '100dvh', // see https://www.youtube.com/watch?v=ru3U8MHbFFI
  overflow: 'hidden',
};

// just showing how to do this with an arrow function
export const Nothing: FC<PropsWithChildren> = ({ children }) => {
  // this routine does nothing and should be deleted
  return children;
};

// just showing how to do this without an arrow function
export default function Sidebar(props: PropsWithChildren) {
  const { children } = props;

  return (
    <aside style={styles}>{children}</aside>
  );
}
