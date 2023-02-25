import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-grey900 bg-background dark:text-grey300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
