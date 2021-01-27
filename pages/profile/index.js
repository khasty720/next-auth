import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { signout, getSession } from 'next-auth/client';
import { PageLayout } from '../../components/layout';
import { authRoute } from '../../utils/auth';

const Index = ({ session }) => (
  <PageLayout>
    <Card>
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
      </CardBody>
      <img width="100%" src={session.user.image} alt="Card cap" />
      <CardBody>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        </CardText>

        <CardLink
          onClick={() => signout()}
        >
          Sign Out
        </CardLink>
      </CardBody>
    </Card>
  </PageLayout>
);

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { authorized, redirect } = authRoute(session);

  if (!authorized) return redirect;

  return {
    props: {
      session,
    },
  };
}

Index.propTypes = {
  session: PropTypes.objectOf(PropTypes.any),
};

Index.defaultProps = {
  session: null,
};

export default Index;
