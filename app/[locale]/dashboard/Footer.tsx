import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

// generally we want specific types, just showing any can be done despite strict mode
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Copyright(props: any) {
  const t = useTranslations('Footer');

  return (
    <Typography
      variant="body2"
      align="center"
      {...props}
      sx={[
        {
          color: 'text.secondary',
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {t('copyright')} &copy;{new Date().getFullYear() + ' '}
      <Link color="inherit" href="https://dunedain.ai/">
        dunedain.ai
      </Link>
    </Typography>
  );
}
