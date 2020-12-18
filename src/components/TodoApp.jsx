import React from 'react'
import { Typography, Row } from 'antd';
import { TodoHeader, TodoList, TodoFooter } from '.';

const { Title } = Typography;

export const TodoApp = () => {
  return (
    <>
      <Row>
        <Title level={3}>@reduxjs/toolkit + antd</Title>
      </Row>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </>
  )
}
