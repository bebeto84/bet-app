export const fetchWithDispatchers = (
  url: string,
  headers: any,
  {
    begin = () => {},
    success = (data: any) => data,
    fail = (error: any) => error
  }
) => {
  return (dispatch: any) => {
    dispatch(begin());
    return fetch(url, { headers })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => dispatch(success(json)))
      .catch(error => dispatch(fail(error)));
  };
};

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
