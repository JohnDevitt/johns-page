import React, { useState } from 'react'
import { Input, Form, Button, notification } from 'antd'
import axios from 'axios'

import { Container, FormItem } from './styledComponents'

const ContactForm = () => {
  const [sendingData, setSendingData] = useState(false)
  const [form] = Form.useForm()

  const submitForm = async () => {
    setSendingData(true)

    try {
      const values = await form.validateFields()
      axios.post('https://formspree.io/mnqgobyw', values)
      notification.success({
        message: 'Contact Information Received',
        description: "I'll get back to you ASAP",
      })
      form.resetFields()
    } catch (errorInfo) {
      notification.error({
        message: 'Data Could not be sent',
        description: errorInfo,
      })
    }
    setSendingData(false)
  }

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: {
      span: 20,
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
    },
  }

  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4, xs: { offset: 0 } },
  }

  return (
    <Container id="contactMe">
      <Form form={form} name="contactMe" onFinish={submitForm}>
        <FormItem
          {...formItemLayout}
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please enter your name',
            },
          ]}
        >
          <Input size="large" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email',
            },
            {
              type: 'email',
              message: 'Please enter a valid email',
            },
          ]}
        >
          <Input size="large" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: 'Please enter a message',
            },
          ]}
        >
          <Input.TextArea
            placeholder="What would you like to talk about?"
            rows={6}
          />
        </FormItem>

        <FormItem {...formTailLayout}>
          <Button htmlType="submit" loading={sendingData} type="primary">
            Submit
          </Button>
        </FormItem>
      </Form>
    </Container>
  )
}

export default ContactForm
