/**
 * Description: Categories admin page
 * Author: Santi
 */

import { useEffect, useState } from 'react'
import Head from 'next/head'
import TableStyled from '../../components/admin/Table'
import axios from 'axios'

export default () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`http://localhost:3000/api/categories`)
      const categories = await res.data
      setData(categories)
    }
    getData()
  }, [])

  return (
    <>
      <Head>
        <title>Categorías</title>
      </Head>
      <TableStyled title="Categorías" data={data} loading={data.length == 0}/>
    </>
  )
}
