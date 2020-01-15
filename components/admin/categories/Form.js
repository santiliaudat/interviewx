import { Form, Input, Button, message } from 'antd'
import axios from 'axios'

const CreateCategory = (props) => {

  const { form, cancel } = props

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields( async (err, fieldsValue) => {
      if (err) {
        return;
      }

      const res = await axios.post('http://localhost:3000/api/post-category', fieldsValue)
      if(res.status == 200) {
        message.success('Category has been created')
        cancel()
      } else {
        message.error('Error on create category')
      }

    })
  }

  const handleChangeName = e => {
    form.setFieldsValue({
      url: `${e.target.value.replace(/\s+/g, '-').toLowerCase()}`,
    });
  }

  return (
    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit}>
      <Form.Item label="Category">
        {form.getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input category name!' }],
        })(<Input onChange={handleChangeName}/>)}
      </Form.Item>
      <Form.Item label="Icon">
        {form.getFieldDecorator('icon', {
          rules: [{ required: true, message: 'Please input category icon!' }],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Url">
        {form.getFieldDecorator('url', {
          rules: [{ required: true, message: 'Please input category url!' }],
        })(<Input addonBefore={"tech/"}  />)}
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 5 }} style={{ textAlign: 'right' }}>
        <Button type="default" htmlType="button" onClick={cancel}>
          Cancel
        </Button>
        <Button style={{ marginLeft: 8 }} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create({ name: 'createCategory' })(CreateCategory)