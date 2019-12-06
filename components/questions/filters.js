/**
 * Description: Filtros de preguntas
 * Author: Santi
 */
import { Select } from 'antd';
import { CardStyled } from './style'

const { Option } = Select;

export default ({ title, data }) => {
  return (
<CardStyled title={title}>
        <Select>
          <Option value="left">left</Option>
          <Option value="right">right</Option>
        </Select>
      </CardStyled>
  )
}

