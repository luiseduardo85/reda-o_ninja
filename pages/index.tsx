import { Main } from 'next/document'
import Head from 'next/head'

import styles from '../styles/home.module.scss'


export default function Home(){

  return (
    <>
    <Head>
        <title>
          Pagina de envio 
        </title>
      </Head>

      <main>
        <div>
          <h1>Tema</h1>
          <input type="text" />
        </div>

        <div>
          <nav>
            <h3>textos motivadores</h3>
          </nav>
        </div>
        <div>
          
            <button>Enviar redação</button>
        </div>
      </main>
    </>
  )
}
