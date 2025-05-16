import Grid from '@mui/material/Grid';
import Login from '@/components/Login';
import Sidebar from '@/components/Sidebar';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Grid container spacing={3}>
        <Grid size={8}>
          <section className={styles.page}></section>
        </Grid>
        <Grid size="grow">
          <Sidebar>
            <div className={styles.soldier}>
              <Login />
            </div>
          </Sidebar>
        </Grid>
      </Grid>
    </main>
  );
}
