import React from 'react';
import { Row, Col, Button, Typography, Divider  } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

const { Text } = Typography;

export const TodoFooter = () => {
  const [remaining, setRemaining] = React.useState(0);
  const todos = useSelector(state => state.todo.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setRemaining(todos.filter(t => !t.complete).length)
  }, [todos])

  return (
    <>
      <Divider />
      <Row>
        <Col flex="auto">
          <Text>
            {remaining} left
          </Text>
        </Col>
        <Col flex="100px">
          <Button
              type="primary"
              icon={<WarningOutlined />}
            >
              Clear all
          </Button>
        </Col>
      </Row>
    </>
  )
}
