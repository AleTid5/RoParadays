import React, { Component } from "react";

// reactstrap components
import {
  Col,
  Container,
  Row,
} from "reactstrap";

export default class SectionBlog extends Component {
  constructor(props) {
    super(props);
    this.blogs = [];
  }

  componentWillMount() {
    this.blogs = [{
      picture: 'blog_1.jpg',
      title: 'Santorini in Low Season',
      users: [{
        name: 'Rodrigo Patronis',
        picture: 'user_1.jpg'
      }]
    }, {
      picture: 'blog_2.jpg',
      title: 'The truth about Dubai',
      users: [{
        name: 'Daiana Pomerol',
        picture: 'user_2.jpg'
      }]
    }, {
      picture: 'blog_3.jpg',
      title: 'Day-Trip to ​Venice',
      users: [{
        name: 'Rodrigo Patronis',
        picture: 'user_1.jpg'
      }, {
        name: 'Daiana Pomerol',
        picture: 'user_2.jpg'
      }]
    }];
  }

  render = () =>
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title">
            <h2>Blog</h2>
          </div>
          <div id="images">
            <Row>
              { this.blogs.map((blog, key) =>
                <Col md="4" sm="6" key={`blog_${key}`}>
                  <h4 className="images-title text-center">{ blog.title }</h4>
                  <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require(`assets/img/uploads/blogs/${blog.picture}`)}
                  />
                  <Row>
                    { blog.users.map((user, key) =>
                      <Col xs={12 / blog.users.length} key={`user_${key}`}>
                        <div className="img-details">
                          <div className="author">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require(`assets/img/uploads/users/${user.picture}`)}
                            />
                          </div>
                          <p>{ user.name }</p>
                        </div>
                      </Col>
                    )}
                  </Row>
                </Col>
              )}
            </Row>
          </div>
        </Container>
      </div>
    </>}