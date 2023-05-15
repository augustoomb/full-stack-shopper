import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Uploader from '@/components/Uploader'
import { useState } from 'react'
import ValidationBtn from '@/components/ValidationBtn'
import UpdateBtn from '@/components/UpdateBtn'
import DataTable from '@/components/DataTable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dataCsvFile, setDataCsvFile] = useState([])
  const [dataAPIProducts, setDataAPIProducts] = useState()

  const cleanItems = () => {
    setDataCsvFile([]);
    setDataAPIProducts(undefined);
  }

  return (    
    <>
      <Head>
        <title>Projeto Shopper</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Uploader title='Insira o arquivo' setDataCsvFile={ setDataCsvFile }/>          
        </div>

        <div className={styles.center}>
          <DataTable dataAPIProducts={ dataAPIProducts }/>          
        </div>

        <div className={styles.grid}>
          <ValidationBtn dataCsvFile={ dataCsvFile } setDataAPIProducts={ setDataAPIProducts }/>

          <UpdateBtn dataAPIProducts={ dataAPIProducts } cleanItems={cleanItems}/> 
        </div>
      </main>
    </>
  )
}
