import React from "react";

const PostPagination = (props) => {
  return (
    <div className="post-pagination">
      <a href="#">
        <i className="far fa-angle-left"></i>
      </a>
      <a href="#" className="active">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">
        <i className="far fa-angle-right"></i>
      </a>
    </div>
  );
};

export default PostPagination;
