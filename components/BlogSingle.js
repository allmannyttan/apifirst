import React from "react";

import BlogDetailsImage from '../assets/images/blog/blog-d-1-1.jpg';
import AuthorImage from '../assets/images/blog/author-1-1.jpg';
import CommentImage1 from '../assets/images/blog/comment-1-1.jpg';
import CommentImage2 from '../assets/images/blog/comment-1-2.jpg';

const BlogSingle = () => {
  return (
    <div>
      <div className="blog-details__main">
        <div className="blog-details__image">
          <img src={BlogDetailsImage} alt="" />
        </div>
        <div className="blog-details__content">
          <div className="blog-one__meta">
            <a href="#">
              <i className="far fa-clock"></i> 20 Feb
            </a>
            <a href="#">
              <i className="far fa-comments"></i> 2 comments
            </a>
          </div>
          <h3>Launch New Mobile App Marketing Pitfalls To Avoid</h3>
          <p>
            There are many variations of passages of available but majority have
            alteration in some by inject humour or random words. There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition, injected humour, or non-characteristic
            words etc.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose injected humour
            and the like.
          </p>
        </div>
        <div className="blog-details__meta">
          <div className="blog-details__tags">
            <span>Tags: </span> <a href="#">Business,</a>{" "}
            <a href="#">Agency,</a> <a href="#">Technology</a>
          </div>
          <div className="blog-details__share">
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="blog-author">
        <div className="blog-author__image">
          <img src={AuthorImage} alt="" />
        </div>
        <div className="blog-author__content">
          <h3>Christine Eve </h3>
          <p>
            Lorem Ipsum is simply dummy text of the rinting and typesetting been
            the industry dummy text ever sincer condimentum purus.
          </p>
        </div>
      </div>
      <div className="comment-one">
        <h3 className="comment-one__block-title">2 Comments</h3>
        <div className="comment-one__single">
          <div className="comment-one__image">
            <img src={CommentImage1} alt="" />
          </div>
          <div className="comment-one__content">
            <h3>Eugenia Floyd</h3>
            <p className="comment-one__date">
              20 Mar, 2020 <span>.</span> 4:00 pm
            </p>
            <p>
              Lorem Ipsum is simply dummy free text of the available printing
              and typesetting been the industry standard dummy text ever sincer
              condimentum purus.
            </p>
          </div>
          <a href="#" className="thm-btn comment-one__btn">
            <span>Reply</span>
          </a>
        </div>
        <div className="comment-one__single">
          <div className="comment-one__image">
            <img src={CommentImage2} alt="" />
          </div>
          <div className="comment-one__content">
            <h3>Nellie Hanson</h3>
            <p className="comment-one__date">
              20 Mar, 2020 <span>.</span> 4:00 pm
            </p>
            <p>
              Lorem Ipsum is simply dummy free text of the available printing
              and typesetting been the industry standard dummy text ever sincer
              condimentum purus.
            </p>
          </div>
          <a href="#" className="thm-btn comment-one__btn">
            <span>Reply</span>
          </a>
        </div>
      </div>
      <div className="comment-form">
        <h3 className="comment-one__block-title">Leave a Comment</h3>
        <form className="contact-form-validated contact-one__form">
          <div className="row">
            <div className="col-lg-6">
              <input type="text" placeholder="Name" name="name" />
            </div>
            <div className="col-lg-6">
              <input type="text" placeholder="Email Address" name="email" />
            </div>
            <div className="col-lg-6">
              <input type="text" placeholder="Website" name="website" />
            </div>
            <div className="col-lg-6">
              <input type="text" placeholder="Subject" name="subject" />
            </div>
            <div className="col-lg-12">
              <textarea placeholder="Write Message" name="message"></textarea>
            </div>
            <div className="col-lg-12 text-left">
              <button type="submit" className="thm-btn contact-one__btn">
                <span>Submit Comment</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogSingle;
