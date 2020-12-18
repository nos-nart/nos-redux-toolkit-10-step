import React from 'react';
import { Radio } from 'antd';
import { Table, Space, Button, Row, Checkbox, Typography, notification } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../App.module.css';
import { TodoActions } from '../slices/todo';
import { FilterActions } from '../slices/filter';

const { Column } = Table;
const { Text } = Typography;

const openNotificationWithIcon = (type, mssg, desc) => {
  notification[type]({
    message: mssg,
    duration: 3,
    description: desc,
  });
};

export const TodoList = () => {
  const filter = useSelector(state => state.filter.key);
  const todos = useSelector(state => state.todo.data);

  const filterTodo = todos.filter(t => {
    if (filter === 'active') {
      return t.complete && t;
    } else if (filter === 'completed') {
      return !t.complete && t;
    }
    return t;
  })

  const dispatch = useDispatch();

  const onRemove = id => {
    dispatch(TodoActions.remove({ id }));
    openNotificationWithIcon('success', 'Successfully', 'Removed an item to todo-list 👍');
  };
  const onToggleComplete = id => dispatch(TodoActions.toggleComplete({ id }));

  const onSetFilter = (e) => {
    dispatch(FilterActions.changeFilter({ filter: e.target.value }))
  };

  return (
    <>
      <br/>
      <Row justify="center">
        <Radio.Group onChange={onSetFilter} defaultValue={filter} buttonStyle="solid">
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="active">Active</Radio.Button>
          <Radio.Button value="completed">Completed</Radio.Button>
        </Radio.Group>
      </Row>
      <br/>
      <Row>
        <Table
          className={styles.wFull}
          bordered={true}
          hasData={todos.length}
          dataSource={filterTodo}
          pagination={false}
          size="small"
        >
          <Column
            title="ID"
            dataIndex="id"
            key="id"
            render={(_, record) => (
              <Text className={record.complete && styles.lineThrough}>{record.id}</Text>
            )}
          />
          <Column
            title="Title"
            dataIndex="title"
            key="title"
            render={(_, record) => (
              <Text className={record.complete && styles.lineThrough}>{record.title}</Text>
            )}
          />
          <Column
            title="Status"
            dataIndex="complete"
            key="status"
            render={(_, record) => (
              <Checkbox checked={record.complete} onChange={() => onToggleComplete(record.id)}/>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <Button
                  size="small" danger
                  icon={<DeleteOutlined />}
                  onClick={() => onRemove(record.id)}
                />
                <Button size="small" icon={<EditOutlined />}/>
              </Space>
            )}
          />
        </Table>
      </Row>
    </>
  )
}