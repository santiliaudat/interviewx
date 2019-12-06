/**
 * Description: Detail interview questions
 * Author: Santi
 */
import { CardStyled } from './style'
import Detail from './collapse'
import Filters from './filters'

export default ({ data }) => {
  return (
    <>
      <div style={{ display: 'block', alignItems: 'center' }}>
        {/* <Filters /> */}
        {/* <CardStyled title={title}> */}
        <Detail questions={data} />
        {/* </CardStyled> */}
        
      </div>
    </>
  )
}