import { Card } from 'antd'

export const CardStyled = props => {
  const bodyStyle = {
    padding: '20px 24px 8px'
  }
  return <Card bodyStyle={bodyStyle} bordered={false} {...props} />
}