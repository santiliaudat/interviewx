import { useState } from 'react'
import { Card, Table, Button } from 'antd'
import CreateCategory from './Form'

const TableStyled = ({ title, data, loading }) => {

  const [creatingCategory, setCreatingCategory] = useState(false)

  const bodyStyle = {
    padding: '20px 24px 8px'
  }

  const columns = [
    { title: 'Name', dataIndex: 'data.name' },
    { title: 'Icon', dataIndex: 'data.icon' },
    { title: 'Url', dataIndex: 'data.url' }
  ]

  return (
    <Card bodyStyle={bodyStyle} bordered={false} title={title}>
      {creatingCategory ?
        <CreateCategory cancel={() => setCreatingCategory(false)}/>
        :
        <>
          <Button type="primary" style={{ marginBottom: 16 }} onClick={() => setCreatingCategory(true)}>
            Add category
          </Button>
          <Table columns={columns} dataSource={data} size="small" loading={loading} rowKey={record => record.ref["@ref"].id}/>
        </>
      }
    </Card>
  )
}

export default TableStyled