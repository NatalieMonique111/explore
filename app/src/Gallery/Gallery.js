import React from "react";

import "../assets/css/explore.css";

import testData from "./test-data.json";

const Gallery = () => {
  const [testImg, setTestImg] = React.useState("");

  const getFlickrImageURL = (photo, size) => {
    let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
    // let url = `https://farm66.staticflickr.com/65535/49301752947_ee909ffa71`;
    if (size) {
      // Configure image size
      url += `_${size}`;
    }
    url += ".jpg";
    return url;
  };

  const createLayout = () => {
    // testData = testData.photos.photo.map((photo, i) => {
    //   if(i % 4 === 0) {

    //   }
    // })
    const returnArr = [];
    for (let index = 0; index < testData.photos.photo.length; index++) {
      const element = testData.photos.photo[index];
      const rowLimit = 10;
      if (index % rowLimit === 0) {
        returnArr.push([]);
      } else {
        returnArr[returnArr.length - 1].push(element);
      }
    }
    testData.photos.photo = returnArr;
  };

  React.useEffect(() => {
    const yourApiKey = "REACT_APP_FLICKR_API_KEY";
    // console.log("API_KEY:", process.env.API_KEY);

    const data = {
      method: "flickr.photos.search",
      api_key: yourApiKey,
      text: "UNESCO", // Search Text
      sort: "interestingness-desc",
      per_page: 12,
      license: "4",
      extras: "owner_name,license",
      format: "json",
      nojsoncallback: 1,
    };

    const parameters = new URLSearchParams(data);

    // const url = `https://api.flickr.com/services/rest/?${parameters}`;
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // We will impliment something later...
    //     console.log(data);
    //     data.photos.photo.map((photo) => {
    //       setTestImg(getFlickrImageURL(photo, "q"));
    //     });
    //   });
    createLayout();
    console.log("TEST", testData);
  }, []);
  return (
    <>
      {/* <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href={testImg}>
              <img
                src={testImg}
                alt="Unesco Site"
                style={{ width: 300, height: 300 }}
              />
              <div className="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
      </div> */}
      {/* <!-- Photo Grid --> */}

      <div>
        <div className="rowx">
          {/* {[0, 1, 2, 3].map((col, i) => (
            <div className="columnx" key={i}>
              {testData.photos.photo.map((arr, j) => (
                <img alt="" key={j} src={getFlickrImageURL(arr[i], "q")} />
              ))}
            </div>
          ))} */}
          {[0, 1, 2, 3].map((col, i) => (
            <div className="columnx" key={i}>
              {testData.photos.photo.map((arr, j) => (
                <img alt="" key={j} src={getFlickrImageURL(arr, "q")} />
              ))}
            </div>
          ))}
          {/* <div className="columnx">
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
          </div>
          <div className="columnx">
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
          </div>
          <div className="columnx">
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
          </div>
          <div className="columnx">
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
            <img
              alt=""
              src={require("assets/img/49301752947_ee909ffa71_q.jpeg").default}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Gallery;
