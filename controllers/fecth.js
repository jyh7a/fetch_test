// Custom
const axiosCustom = function (method, url, data) {
  try {
    axios({
      method,
      url,
      data,
      // data: {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone',
      // },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
};
