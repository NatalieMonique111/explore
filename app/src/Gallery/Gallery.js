import React from "react";

const Gallery = () => {
  const [testImg, setTestImg] = React.useState("");

  React.useEffect(() => {
    const yourApiKey = "a79d815bc8a425b6e16b2436606de305";

    const data = {
      method: "flickr.photos.search",
      api_key: yourApiKey,
      text: "cat", // Search Text
      sort: "interestingness-desc",
      per_page: 12,
      license: "4",
      extras: "owner_name,license",
      format: "json",
      nojsoncallback: 1,
    };

    const parameters = new URLSearchParams(data);

    const getFlickrImageURL = (photo, size) => {
      let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
      if (size) {
        // Configure image size
        url += `_${size}`;
      }
      url += ".jpg";
      return url;
    };

    const url = `https://api.flickr.com/services/rest/?${parameters}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // We will impliment something later...
        console.log(data);
        data.photos.photo.map((photo) => {
          setTestImg(getFlickrImageURL(photo, "q"));
        });
      });
  }, []);
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="thumbnail">
          <a href={testImg}>
            <img
              src={testImg}
              alt="Lights"
              style={{ width: 150, height: 150 }}
            />
            <div className="caption">
              <p>Lorem ipsum...</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
