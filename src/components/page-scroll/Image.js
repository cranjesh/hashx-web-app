import React from "react";

export default ({src, title}) => {
  return (
<div class="image-wrapper">
  <img src={src} alt={title}/>
</div>
  );
};