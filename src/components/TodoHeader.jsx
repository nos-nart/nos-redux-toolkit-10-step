import React from 'react';
import { Input, Row, Col, Button, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { TodoActions } from '../slices/todo';
import { nanoid } from 'nanoid';

const openNotificationWithIcon = (type, mssg, desc) => {
  notification[type]({
    message: mssg,
    duration: 3,
    description: desc,
  });
};

export const TodoHeader = () => {
  const [task, setTask] = React.useState('');
  const dispatch = useDispatch();
  const onAdd = () => {
    if (!task) {
      openNotificationWithIcon('error', 'Input error', 'Title cannot be empty');
      return;
    }
    dispatch(TodoActions.add({ id: nanoid(), title: task }));
    openNotificationWithIcon('success', 'Successfully', 'Added an item to todo-list 👍');
    setTask('');
  }

  return (
    <Row gutter="8">
      <Col flex="auto">
        <Input
          placeholder="what need to be done?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onPressEnter={onAdd}
        />
      </Col>
      <Col flex="100px">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onAdd}
        >
            Add
        </Button>
      </Col>
    </Row>
  )
}
