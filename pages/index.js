/**
 * Description: Index Page
 * Author: Santi
 */

import Head from 'next/head'
import Questions from '../components/questions'

const Dashboard = props => {
  return (
    <>
      <Head>
        <title>Lenguaje de programación</title>
      </Head>
      <Questions title={"React"} data={props}/>
    </>
  )
}

export default Dashboard
