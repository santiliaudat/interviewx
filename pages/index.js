/**
 * Description: Index Page
 * Author: Santi
 */

import Head from 'next/head'
import { Card } from 'antd'

export default () => {
  return (
    <>
      <Head>
        <title>Lenguaje de programación</title>
      </Head>
      <Card title="TECHNICAL INTERVIEW QUESTIONS" style={{ textAlign: 'center'}}>
        <div>
          <h1>Let's fly</h1>
          <img src="/static/rocket.gif" style={{ width: 300, height: "auto" }} />
        </div>
      </Card>
    </>
  )
}