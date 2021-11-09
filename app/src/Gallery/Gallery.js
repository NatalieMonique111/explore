import React from "react";

import "../assets/css/explore.css";

import { FLICKR_API_KEY } from "./config";

const Gallery = ({ siteName, state }) => {
  const [photos, setPhotos] = React.useState([]);

  const getFlickrImageURL = (photo, size) => {
    if (!photo) return "";
    console.log("PHOTO: ", photo);
    let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;

    if (size) {
      // Configure image size
      url += `_${size}`;
    }
    url += ".jpg";
    return url;
  };

  const createLayout = (rawPhotos) => {
    const returnArr = [];
    for (let index = 0; index < rawPhotos.length; index++) {
      const element = rawPhotos[index];
      const rowLimit = 10;
      if (index % rowLimit === 0) {
        returnArr.push([]);
      } else {
        returnArr[returnArr.length - 1].push(element);
      }
    }
    return returnArr;
  };

  React.useEffect(() => {
    const data = {
      method: "flickr.photos.search",
      api_key: FLICKR_API_KEY,
      text: `${siteName} Unesco`, // Search Text
      sort: "interestingness-desc",
      per_page: 100,
      license: "4",
      extras: "owner_name,license",
      format: "json",
      nojsoncallback: 1,
    };

    console.log(data.text);

    const parameters = new URLSearchParams(data);

    let isMounted = true;
    const url = `https://api.flickr.com/services/rest/?${parameters}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          console.log(data);
          return setPhotos(createLayout(data.photos.photo));
        }
      });

    return () => (isMounted = false);
  }, [siteName, state]);
  return (
    <>
      {/* <!-- Photo Grid --> */}
      <div>
        <div className="rowx">
          {[0, 1, 2, 3].map((col, i) => (
            <div className="columnx" key={i}>
              {photos.map((arr, j) => (
                <a
                  href={getFlickrImageURL(arr[i], "b")}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt="" key={j} src={getFlickrImageURL(arr[i], "q")} />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Gallery;
