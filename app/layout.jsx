export const metadata = {
  title: 'Sofiverse Story Generator',
  description: 'Create your own universe one chapter at a time.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
