import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/index';
import { Title } from '../components/elements';

const Form = styled.form`
  margin: 2rem;
  min-width: 400px;
  text-align: left;
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  border: 1px solid var(--text-color);
  appearance: none;
  outline: 0;
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem 2rem;
  border: 1px solid var(--text-color);
  appearance: none;
  outline: 0;
  cursor: pointer;
`;

const Group = styled.div`
  margin-bottom: 2rem;
`;

const ActionGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: var(--background-color);
  background-color: var(--primary-color);
  cursor: pointer;
  outline: 0;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

export default class CorsTester extends Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError(error) {
    console.error(error);
  }

  handleSuccess(response) {
    console.log(response);
    console.log(response.headers);
    console.log(response.body);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const url = data.get('url');
    const method = data.get('method') || 'HEAD';
    const referrer = data.get('referrer') || window.location;
    const contentType = data.get('content-type') || 'application/json';
    const body = {};

    fetch(url, {
      body: method !== 'GET' && method !== 'HEAD' ? JSON.stringify(body) : null,
      headers: {
        'content-type': contentType
      },
      method: method,
      mode: 'no-cors',
      redirect: 'error',
      referrer: referrer,
    })
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  render() {
    return (
      <Layout pageTitle="Toolbox" className="centered">
        <Title>CORS Tester</Title>
        <Form onSubmit={ this.onSubmit }>
          <Group>
            <Label>Method</Label>
            <Select name="method">
              <option>HEAD</option>
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </Select>
          </Group>
          <Group>
            <Label>Service URL</Label>
            <Input type="text" name="url" placeholder="The URL of an API you'd like to test." />
          </Group>
          <ActionGroup>
            <Button>Check CORS</Button>
          </ActionGroup>
        </Form>
      </Layout>
    );
  }
}
