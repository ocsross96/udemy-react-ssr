export const FETCH_USERS = 'fetch_users';
export const FETCH_CURRENT_USER = 'fetch_current_user';

// api = axiosInstance
export const fetchUsers = () => async (dispatch, getState, api) => {
  try {
    console.log('try fetch users');
    const res = await api.get('/users');

    dispatch({
      type: FETCH_USERS,
      payload: res
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get('/current_user');
  
    dispatch({
      type: FETCH_CURRENT_USER,
      payload: res
    });
  } catch (err) {
    console.log(err);
  }
}