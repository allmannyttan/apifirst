import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import BlogPost from "../components/BlogPost";
import PostPagination from "../components/PostPagination";
import Footer from "../components/Footer";

import BlogImage1 from "../assets/images/blog/blog-1-1.jpg";
import BlogImage2 from "../assets/images/blog/blog-1-2.jpg";
import BlogImage3 from "../assets/images/blog/blog-1-3.jpg";
import BlogImage4 from "../assets/images/blog/blog-1-4.jpg";
import BlogImage5 from "../assets/images/blog/blog-1-5.jpg";
import BlogImage6 from "../assets/images/blog/blog-1-6.jpg";
import MenuContextProvider from "../context/MenuContext";

const BlogPage = () => (
  <MenuContextProvider>
    <Layout pageTitle="API 1ST">
      <Preloader />
      <Header btnClass="main-nav__btn-two" />
      <MobileMenu />
      <PageHeader pageHeading="Blog Grid Page" />

      <section className="blog-grid">
        <Container>
          <Row>
            <BlogPost
              postImage={BlogImage1}
              postTitle="Leverage agile frame works to provide a synopsis for"
              postDate="20 Feb"
              postCommentCount="2 comments"
              postLink="/blog-post"
            />
            <BlogPost
              postImage={BlogImage2}
              postTitle="Leverage agile frame works to provide a synopsis for"
              postDate="20 Feb"
              postCommentCount="2 comments"
              postLink="/blog-post"
            />
            <BlogPost
              postImage={BlogImage3}
              postTitle="Leverage agile frame works to provide a synopsis for"
              postDate="20 Feb"
              postCommentCount="2 comments"
              postLink="/blog-post"
            />
            <BlogPost
              postImage={BlogImage4}
              postTitle="Leverage agile frame works to provide a synopsis for"
              postDate="20 Feb"
              postCommentCount="2 comments"
              postLink="/blog-post"
            />
            <BlogPost
              postImage={BlogImage5}
              postTitle="Leverage agile frame works to provide a synopsis for"
              postDate="20 Feb"
              postCommentCount="2 comments"
              postLink="/blog-post"
            />
            <BlogPost
              postImage={BlogImage6}
              postTitle="Leverage agile frame works to provide a synopsis for"
              postDate="20 Feb"
              postCommentCount="2 comments"
              postLink="/blog-post"
            />
          </Row>
          <PostPagination />
        </Container>
      </section>

      <Footer />
    </Layout>
  </MenuContextProvider>
);

export default BlogPage;
