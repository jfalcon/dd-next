import Grid from '@mui/material/Grid';
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
            <>
              <p>size=grow</p>
              <div className={styles.soldier}></div>
            </>
          </Sidebar>
        </Grid>
      </Grid>
    </main>
  );
}
