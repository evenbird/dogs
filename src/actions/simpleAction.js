export const fetchDogsAction = () => dispatch => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => {
      //   console.log(JSON.stringify(response));
      return response.json();
    })
    .then(data => {
      console.log(data);

      dispatch({
        type: "FETCH_DOGS_ACTION",
        payload: data
      });
    });
};

// const imageAction = name => dispatch => {
//   console.log("333");
//   fetch(`https://dog.ceo/api/breed/${name}/images`)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       //   console.log(data);

//       dispatch({
//         type: "IMAGE_ACTION",
//         payload: data
//       });
//     });
// };

// const imagesAction = names => {
//   return Promise.all(
//     names.map(name => {
//       console.log("44444", name);
//       imageAction(name);
//     })
//   );
// };

export const fetchImages = names => dispatch => {
  return Promise.all(
    names.map(name => {
      fetch(`https://dog.ceo/api/breed/${name}/images`)
        .then(response => {
          return response;
        })
        .then(data => {
          return data;
        });
    })
  ).then(data => {
    console.log("2222222222", data);
    return data;
  });
};

// dispatch({
//   type: "IMAGE_ACTION",
//   payload: data
// });
