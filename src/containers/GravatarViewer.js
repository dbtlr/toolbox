import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import md5 from 'md5';
import BaseLayout from '../components/Layout';
import { ErrorIcon, SpinnerIcon } from '../components/icons';
import { Title as BaseTitle } from '../components/elements';

const Layout = styled(BaseLayout)`
  @media screen and (min-width: 780px){
    width: 720px;
  }
`;

const Form = styled.form`

`;

const Title = styled(BaseTitle)`
  margin-top: 0;
`;

const Input = styled.input`
  width: calc(100%);
  appearance: none;
  outline: 0;
  background: transparent;
  border: none;
  text-align: center;
`;

const Field = styled.div`
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  border: 1px solid var(--light-color);
  border-radius: 5px;
  
  &.errored {
    background-color: var(--error-color);
    
    input {
      font-weight: 700;
      color: white;
    }
  }
  
  &.success {
    background-color: var(--success-color);
    
    input {
      font-weight: 700;
      color: white;
    }
  }
`;

const Response = styled.section`
  margin: 4rem 0;
  
  .icon {
    margin-top: 1rem;
    
    .fa-exclamation-triangle path {
      color: var(--error-color);
    }
  }
  
  pre {
    overflow-x: scroll;
    text-align: left;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 2rem;
  color: var(--error-color);
  font-size: 1.5rem;
`;

const Headline = styled.div`
  position: absolute;
  text-align: center;
  right: 0;
  left: 0;
  top: -1rem;
  
  h3 {
    font-size: 1.5rem;
    padding: 0 1rem;
    display: inline;
    background: var(--background-color);
  }
`;

const Avatar = styled.img`
  grid-area: avatar;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  display: inline-block;
  
  @media screen and (min-width: 780px) {
    display: block;
  }
`;

const Box = styled.section`
  border: 1px solid var(--light-color);
  padding: 2rem;
  position: relative;
  text-align: center;
  
  @media screen and (min-width: 780px) {
    text-align: left;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-column-gap: 2rem;
    grid-template-areas:
      "avatar profile";
  }
`;

const Profile = styled.div`
  grid-area: profile;
  font-size: 1.1rem;
`;

const Name = styled.h3`
  font-size: 1.75rem;
  margin: 0;
`;
const About = styled.p``;

const ShowFull = styled.span`
  display: inline-block;
  color: var(--primary-color);
  margin: 2rem 0;
  cursor: pointer;
`;

export default class GravatarViewer extends Component {
  constructor() {
    super();

    this.state = {
      email: null,
      hash: null,
      isSubmitted: false,
      running: false,
      isError: false,
      data: null,
      showFullProfile: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get('email');
    const hash = md5(email);

    // Reset the state and mark as running
    this.setState({
      email,
      hash,
      isSubmitted: true,
      running: true,
      isError: false,
      showFullProfile: false,
      data: null
    });

    axios.get(`https://en.gravatar.com/${hash}.json`).then(response => {
      const { data } = response;
      console.log(data);

      this.setState({
        running: false,
        isError: false,
        data,
      });

    }).catch(error => {
      const data = {
        message: 'An unknown error occurred whil querying Gravatar. Check your Internet and try again later.',
      };

      if (error.response.status === 404) {
        data.message = 'It looks like that email is not associated to a Gravatar. Try another.';
      }

      this.setState({
        running: false,
        isError: true,
        data,
      });
    });
  }

  toggleShowFull() {
    this.setState({
      showFullProfile: !this.state.showFullProfile,
    });
  }

  renderResponse() {
    const { running, email, hash, isSubmitted, isError, data } = this.state;

    if (running) {
      return (
        <Fragment>
          <p>Checking to see if there is a Gravatar matching { email }...</p>
          <SpinnerIcon className="fa-4x" />
        </Fragment>
      );
    }

    if (isError) {
      return (
        <Fragment>
          <ErrorIcon className="fa-4x" />
          <ErrorMessage>{ data.message }</ErrorMessage>
        </Fragment>
      );
    }

    if (isSubmitted) {
      const { displayName, aboutMe, profileUrl } = data.entry[0];
      const { showFullProfile } = this.state;

      return (
        <Fragment>
          <Box>
            <Headline><h3>Gravatar Profile</h3></Headline>
            <Avatar src={`https://gravatar.com/avatar/${hash}?s=150`} />
            <Profile>
              <Name>{ displayName }</Name>
              <About>{ aboutMe }</About>
              <a href={profileUrl}>Gravatar Profile Page &rarr;</a>
            </Profile>
          </Box>
          <ShowFull onClick={ this.toggleShowFull.bind(this) }>{ showFullProfile ? 'Hide' : 'Show' } Profile API Data { showFullProfile ? '↑' : '↓' }</ShowFull>
          <pre style={{ display: showFullProfile ? 'block' : 'none' }}>
            { JSON.stringify(data.entry[0], null, 2) }
          </pre>
        </Fragment>
      );
    }

    return 'Enter an email to check...';
  }

  render() {

    const { running, isSubmitted, isError } = this.state;

    let className = '';

    if (!running && isSubmitted) {
      if (isError) {
        className = 'errored';
      } else {
        className = 'success';
      }
    }


    return (
      <Layout pageTitle="Toolbox" className="centered">
        <Title>Gravatar Viewer</Title>
        <Form onSubmit={ this.onSubmit }>
          <Field className={className}>
            <Input
              type="email"
              name="email"
              placeholder="Enter an email address"
            />
          </Field>
        </Form>
        <Response>
          { this.renderResponse() }
        </Response>
      </Layout>
    );
  }
}
