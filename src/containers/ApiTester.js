import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BaseLayout from '../components/Layout';
import { SpinnerIcon } from '../components/icons';
import { Title as BaseTitle } from '../components/elements';

const Layout = styled(BaseLayout)`
  @media screen and (min-width: 780px) {
    display: grid;
    
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 1rem;
    grid-template-areas:
      "title title"
      "request response";
  }
`;

const Request = styled.section`
  grid-area: request;
  border: 1px solid var(--light-color);
  padding: 2rem;
  margin-bottom: 2rem;
  
  @media screen and (min-width: 780px) {
    margin-bottom: 0;
  }
`;

const Response = styled.section`
  grid-area: response;
  border: 1px solid var(--light-color);
  padding: 2rem;
  overflow-x: scroll;
  
  .icon {
    margin-top: 1rem;
  }
`;

const Title = styled(BaseTitle)`
  margin-top: 0;
  grid-area: title;
`;

const Name = styled.h3`
  margin: 0 0 2rem;
  font-size: 1.5rem;
`;

const Form = styled.form`
  text-align: left;
`;

const Results = styled.article`
  &.error {
    color: var(--error-color);
  }
  
  pre {
    text-align: left;
  }
`;

const Label = styled.label`
  margin-bottom: 1rem;
  display: block;
`;

const Input = styled.input`
  width: calc(100%);
  padding: 1rem 2rem;
  border: 1px solid var(--text-color);
  appearance: none;
  outline: 0;
`;

const Select = styled.select`
  width: calc(100%);
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
  padding: 0.75rem 2rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: var(--background-color);
  background-color: var(--primary-color);
  cursor: pointer;
  outline: 0;
  border: none;
  
  &:hover {
    background-color: var(--light-primary-color);
  }
`;

export default class ApiTester extends Component {
  constructor() {
    super();

    this.state = {
      isSubmitted: false,
      running: false,
      isError: false,
      data: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError(error) {
    console.dir(error.request);
    this.setState({
      running: false,
      isError: true,
      data: error,
    });
  }

  handleSuccess(response) {
    const { data, headers } = response;
    console.dir(data);
    console.dir(headers);

    this.setState({
      running: false,
      isError: false,
      data,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    // Reset the state and mark as running
    this.setState({ isSubmitted: true, running: true, isError: false, data: null });

    const form = new FormData(e.target);
    const url = form.get('url');
    const method = form.get('method') || 'HEAD';
    const contentType = form.get('content-type') || 'application/json';
    const data = {};
    const headers = {
      'content-type': contentType,
    };

    axios({
      method: method,
      url: url,
      headers,
      data,
    })
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  renderResponse() {
    const { running, isSubmitted, isError, data } = this.state;

    if (running) {
      return (
        <Fragment>
          <p>Checking the URL you provided...</p>
          <SpinnerIcon className="fa-4x" />
        </Fragment>
      );
    }


    if (isError) {
      return (
        <Results className="error">
          <h4>{ data.message }</h4>
          { typeof data.response !== 'undefined' ?
            <ul>
              <li>Status: { data.response.status } { data.response.statusText }</li>
            </ul> : ''}
        </Results>
      );
    }

    if (isSubmitted) {
      return (
        <Results>
          <pre>{ JSON.stringify(data, null, 2) }</pre>
        </Results>
      );
    }

    return 'Enter a URL to test...';
  }

  render() {
    return (
      <Layout pageTitle="Toolbox" className="centered full">
        <Title>API Tester</Title>
        <Request>
          <Name>Request</Name>
          <Form onSubmit={ this.onSubmit }>
          <Group>
            <Label>Method</Label>
            <Select name="method">
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
              <option>OPTIONS</option>
              <option>HEAD</option>
            </Select>
          </Group>
          <Group>
            <Label>Service URL</Label>
            <Input type="text" name="url" placeholder="The URL of an API you'd like to test..." />
          </Group>
          <ActionGroup>
            <Button>Test</Button>
          </ActionGroup>
        </Form>
        </Request>
        <Response>
          <Name>Response</Name>
          { this.renderResponse() }
        </Response>
      </Layout>
    );
  }
}
