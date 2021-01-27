const authRoute = (session) => {
  if (session) return { authorized: true };

  return {
    authorized: false,
    redirect: {
      redirect: {
        destination: '/auth/login?unauthorized=true',
        permanent: false,
      },
    },
  };
};

export default authRoute;
