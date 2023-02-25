import '@/styles/globals.css';
import Container from '@/components/Container';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
      {process.env.NEXT_PUBLIC_ENV === 'production' ? <Analytics /> : null}
    </>
  );
}
