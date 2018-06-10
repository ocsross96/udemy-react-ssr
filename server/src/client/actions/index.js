export const FETCH_USERS = 'fetch_users';

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