export const login = (payload, actionSuccess, actionFailed) => {
  return (dispatch, getState) => {
    payload.fb
      .doSignInWithEmailAndPassword(payload.username, payload.pwd)
      .then(response => {
        payload["authToken"] = response;
        actionSuccess();
      })
      .catch(error => actionFailed(error));
  };
};

export const logout = (payload, actionSuccess, actionFailed) => {
  return (dispatch, getState) => {
    payload.fb.doSignOut();
  };
};

export const signup = (payload, actionSuccess, actionFailed) => {
  return (dispatch, getState) => {
    payload.fb
      .doCreateUserWithEmailAndPassword(
        payload.userdata.username,
        payload.userdata.password
      )
      .then(() => {
        const uid = payload.fb.auth.currentUser.uid;
        payload.fb.setUserData(uid, payload.userdata);
        actionSuccess();
      })
      .catch(error => actionFailed(error));
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    login: (username, pwd, fb, sCallback, fCallback) => {
      dispatch(login({ username, pwd, fb }, sCallback, fCallback));
    },
    logout: (fb, sCallback, fCallback) => {
      dispatch(logout({ fb }, sCallback, fCallback));
    },
    signup: (userdata, fb, sCallback, fCallback) => {
      dispatch(signup({ userdata, fb }, sCallback, fCallback));
    }
  };
};
