
import type { AppProps } from 'next/app'

globalStyles() //para que os estilos globais possam ser carregados


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
