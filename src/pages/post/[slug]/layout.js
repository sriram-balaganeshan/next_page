import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { getMeta } from '@/api/route';

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params, searchParams }) {
  const {slug} = params
  const data = await getMeta(slug);
  let meta = data?.json;
  let title = meta?.title || 'Kidde Budde - Insights';
  let img = meta?.og_image[0]?.url || '';
  let description = meta?.description || '';
  return {
      title: title,
      description: description,
      authors: [{ name: meta?.author || '' }],
      twitter: {
          card: 'summary_large_image',
          title: title,
          description: description,
          site: meta?.twitter_site || '@YumeLabsHQ',
          images: [img],
      },
      openGraph: {
          title: title,
          description: description,
          type: meta?.og_type || 'website',
          siteName: meta?.og_site_name || 'Yume Labs',
          url: `https://yumelabs.com/insights/${slug}`,
          locale: meta?.og_locale || 'en-US',
          images: [
              {
                  url: img,
                  width: 800,
                  height: 600,
              },
              {
                  url: img,
                  width: 1800,
                  height: 1600,
                  alt: 'My custom alt',
              },
          ],
      },
      alternates: {
          canonical: `https://yumelabs.com/insights/${slug}`,
      },
      themeColor: '#000000',
    };
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
