// 'use client';

//import { useState } from 'react';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Login from '@/components/Login';
import Sidebar from '@/components/Sidebar';
import Slide from '@mui/material/Slide';
import styles from './page.module.css';
// import { useUser } from '@/hooks';

export default function Home() {
  // const [user] = useUser();
  //const [loggedIn, setLoggedIn] = useState(false);

  return (
    <main>
      <Grid container spacing={3}>
        <Grid size={8}>
          <Fade appear={false} in={true}>
            <section className={styles.page}></section>
          </Fade>
        </Grid>
        <Grid size="grow">
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <Sidebar>
              <div className={styles.soldier}>
                <Login />
              </div>
            </Sidebar>
          </Slide>
        </Grid>
      </Grid>
    </main>
  );
}
