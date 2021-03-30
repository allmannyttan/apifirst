import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Preloader from "../components/Preloader";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BlogSidebar from "../components/BlogSidebar";
import BlogSingle from "../components/BlogSingle";
import MenuContextProvider from "../context/MenuContext";

const BlogPostPage = () => (
  <MenuContextProvider>
    <Layout pageTitle="API 1ST">
      <Preloader />
      <Header btnClass="main-nav__btn-two" />
      <MobileMenu />
      <PageHeader pageHeading="Blog Post Page" />

      <section className="blog-details">
        <Container>
          <Row>
            <Col lg={8} xs={12}>
              <BlogSingle />
            </Col>
            <Col lg={4}>
              <BlogSidebar />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </Layout>
  </MenuContextProvider>
);

export default BlogPostPage;
