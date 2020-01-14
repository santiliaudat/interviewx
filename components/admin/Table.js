import { Card, Table } from 'antd'

const TableStyled = ({ title, data, loading }) => {
  const bodyStyle = {
    padding: '20px 24px 8px'
  }

  const columns = [{ title: '#', dataIndex: 'id' },
  { title: 'Nombre', dataIndex: 'name' }]

  return (
    <Card bodyStyle={bodyStyle} bordered={false} title={title}>
      <Table columns={columns} dataSource={data} size="small" loading={loading}/>
    </Card>
  )
}

export default TableStyled