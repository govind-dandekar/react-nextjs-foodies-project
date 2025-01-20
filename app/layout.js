import MainHeader from '@/components/main-header/main-header';

// css file losded into root layout is available on every page
import './globals.css';
import MainHeaderBackground from '@/components/main-header/main-header-background';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
