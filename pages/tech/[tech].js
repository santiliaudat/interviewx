/**
 * Description: Dashboard page
 * Author: Santi
 */

import Head from 'next/head'
import Questions from '../../components/questions'
import axios from 'axios'

const Dashboard = data => {
  return (
    <>
      <Head>
        <title>Lenguaje de programación</title>
      </Head>
      <Questions title={"React"} data={data}/>
    </>
  )
}

Dashboard.getInitialProps = async function (context) {
  try {
    const { name } = context.query;
    const res = await axios.get(`http://www.mocky.io/v2/5dea6657300000eb432b08ad?category.name=${name}`)
    const questions = await res.data
    return { 
      data: questions
    }
  } catch (e) {
    console.log(e)
  }
}

export default Dashboard
