import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../assets/all-images/ava-1.jpg";

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i class="ri-user-line">{blog.author}</i> 
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="section__description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comments</h4>

                <div className="single__comment d-flex gap-3">
                  <img src="data:image/jpeg;base64,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" alt="" />
                  <div className="comment__content">
                    <h6 className=" fw-bold">{blog.author}</h6>
                    <p className="section__description mb-0">14 July, 2022</p>
                    <p className="section__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos nobis totam eius laborum molestias itaque minima
                      distinctio, quae velit tempore!
                    </p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i class="ri-reply-line"></i> Replay
                    </span>
                  </div>
                </div>

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    You must sign-in to make or comment a post
                  </p>

                  <Form>
                    <FormGroup className=" d-flex gap-3">
                      <Input type="text" placeholder="Full name" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
