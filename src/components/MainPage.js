import React, { useState, useEffect } from "react";
import Image from "./Image";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

require("dotenv").config();

const apiKey = process.env.REACT_APP_API_ACCESS_KEY;

function MainPage({ setIsEnlarged, setImgInfo }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const data = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=10`
    );

    const response = await data.json();
    console.log(response);
    setImages([...images, ...response]);
  };

  //next={fetchImages()}

  return (
    <div>
      <InfiniteScroll style={{overflow: "hidden", marginTop: "5rem"}} scrollThreshold={0.99} dataLength={images.length} next={()=> fetchImages()} hasMore={true} loader={<Loader />}>
        <div className="photo-grid">
          {images.map((image) => (
            <div
              onClick={() => {
                setIsEnlarged(image.urls.full);
                setImgInfo(image);
              }}>
              <Image
                img={image.urls.regular}
                alt={image.alt_description}
                key={image.id}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default MainPage;
