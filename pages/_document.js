import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-blueBackground bg-background dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
