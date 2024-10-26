import '@styles/globals.css';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

export const metadata = {
    title: "clientesAI",
    description: 'Wonderful Social insights'
}

function RootLayout({children}) {
  return (
    <html>
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
        <body>
            <main className='app'>
                <Navigation />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;