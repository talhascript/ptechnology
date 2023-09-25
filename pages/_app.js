import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router' // Import the useRouter hook
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  const router = useRouter(); // Initialize the router object

  // Check if the current route is '/login' or '/signup'
  const isLoginPage = router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/forgotpass';

  return (
    <>
      <Head>
        <title>Perseverance Technology</title>
      </Head>

      {/* Conditionally render the Navbar based on the route */}
      {!isLoginPage && <Navbar />}

      {/* Render the component for all pages */}
      <Component {...pageProps} />

      {/* Conditionally render the Footer based on the route */}
      {!isLoginPage && <Footer />}
    </>
  )
}
