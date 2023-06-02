import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import store from '@/redux/store'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Provider store={store}>
          <ToastContainer
            theme='light'
            position='top-right'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
          />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </SessionProvider>
  )
}
