import React from "react";

const PageHeader = (props) => {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h2>{props.pageHeading}</h2>
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <span>{props.pageHeading}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PageHeader;
