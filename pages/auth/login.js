import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Row, Button } from 'reactstrap';
import { providers as getProviders, signIn } from 'next-auth/client';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

const Login = ({ providers, unauthorized }) => {
  if (unauthorized) toast.error('Unauthorized!');

  return (
    <Row className="h-75">
      <Col md={{ size: 4, offset: 4 }} className="text-center my-5 my-md-auto">
        <Card body className="login">
          <CardBody>
            <CardTitle>
              <h2 className="mb-4">Next Auth</h2>
            </CardTitle>
            <CardSubtitle>
              <h5 className="text-secondary font-weight-normal mb-4">NextAuth Demo Application</h5>
            </CardSubtitle>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <Button onClick={() => signIn(provider.id)}><i className="fab fa-github mr-1" />  Sign in with {provider.name}</Button>
              </div>
            ))}
          </CardBody>
        </Card>
      </Col>
    </Row>

  );
};

export async function getServerSideProps(context) {
  const { unauthorized = false } = context.query;
  const providers = await getProviders(context);

  return {
    props: {
      providers,
      unauthorized,
    },
  };
}

Login.propTypes = {
  providers: PropTypes.arrayOf(PropTypes.any),
  unauthorized: PropTypes.bool,
};

Login.defaultProps = {
  providers: [],
  unauthorized: false,

};

export default Login;
