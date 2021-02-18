import App from 'next/app'
import 'antd/dist/antd.css'
import '../static/styles/pages/comm.css'


export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}