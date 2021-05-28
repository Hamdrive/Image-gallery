import React from 'react'


function Image({ img, alt, keyId}) {
  return (
    <div>
      <img className="image-regular" src={img} key={keyId} alt={alt}/>
    </div>
  );
}

export default Image
