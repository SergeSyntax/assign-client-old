import React, { useEffect, Fragment } from 'react';

import ServerAlert from 'components/shared/ServerAlert';
import { useSelector, useDispatch } from 'react-redux';
import Loading from 'pages/Loading/Loading';
import { fetchUser } from 'actions/users';
import Routes from 'pages/Routes';

function App() {
  const loading = useSelector(state => state.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? <Loading /> : <Routes />}
      <ServerAlert />
    </Fragment>
  );
}

export default App;
