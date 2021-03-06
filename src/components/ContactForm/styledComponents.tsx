import styled from 'styled-components'
import { Form } from 'antd'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const FormItem = styled(Form.Item)`
  @media (max-width: 767px) {
    width: 20rem;
  }
  width: 40rem;
  padding: 0.5rem 0rem;
`
