import { Collapse, Icon, Select, Rate } from 'antd';
import ReactMarkdown from 'react-markdown'
const { Panel } = Collapse;

const genExtra = (level) => (
  <Rate disabled defaultValue={level} count={3} character={<Icon type="fire" />} />
);

const Detail = ({ questions }) => {
  const customPanelStyle = {
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
    backgroundColor: '#fff'
  };

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />} ç
      style={{ backgroundColor: '#f0f2f5' }}
    >
      {questions.data && questions.data.map(item => (
        <Panel header={item.data.question} key={item.ref["@ref"].id} style={customPanelStyle} extra={genExtra(item.data.level)}>
            <div  style={{ paddingLeft: 20 }}>
              <ReactMarkdown source={item.data.response}/>
            </div>
        </Panel>
      ))}
    </Collapse>
  );
}

export default Detail