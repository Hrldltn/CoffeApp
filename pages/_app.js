import '../styles/globals.css'
import { QuioscoProvider } from '../context/QuioscoProvider'

function App({ Component, pageProps }) {
  return(
      <QuioscoProvider>
        <Component {...pageProps} />
      </QuioscoProvider>
  )
}

export default App
