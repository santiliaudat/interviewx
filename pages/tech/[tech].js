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
    const { tech } = context.query;
    const res = await axios.get(`http://localhost:3000/api/questions/${tech}`)
    const questions = await res.data
    return { 
      data: questions
    }
  } catch (e) {
    console.log(e)
  }
}

export default Dashboard
