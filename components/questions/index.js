/**
 * Description: Detail interview questions
 * Author: Santi
 */
import Detail from './collapse'

export default ({ data }) => {
  return (
    <>
      <div style={{ display: 'block', alignItems: 'center' }}>
        <Detail questions={data} />        
      </div>
    </>
  )
}