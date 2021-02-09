import React from 'react'
import './Blog.scss'

import Header from '../../Header/Header'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import articles from './Articles' 

function Blog() {
    return (
        <>
            <Header/>
            <div className="page-top-section blog_grid">
                <h1 className="pinkText">Tyutee Blog</h1>
                <Container>
                    <Row>
                        <Col md={{span: 6}} lg={{span: 6}}>
                            <section style={{backgroundImage: "url('/blog/1.jpg')"}}>
                                <div className="blog_card">
                                    <span className="type_and_date"><strong>ARTICLE</strong> - 12/1/2012</span>
                                    <h3 className="blog_title">This is a blog title</h3>
                                    <span className="blog_author"> - Author Name</span>
                                    <span className="read_more">Read More</span>
                                </div>
                            </section>
                        </Col>
                        <Col md={{span: 6}} lg={{span: 6}}>
                            <section style={{backgroundImage: "url('/blog/2.jpg')"}}>
                                <div className="blog_card">
                                    <span className="type_and_date"><strong>ARTICLE</strong> - 12/1/2012</span>
                                    <h3 className="blog_title">This is a blog title</h3>
                                    <span className="blog_author"> - Author Name</span>
                                    <span className="read_more">Read More</span>
                                </div>
                            </section>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span: 4}} lg={{span: 4}}>
                            <section style={{backgroundImage: "url('/blog/3.jpg')"}}>
                                <div className="blog_card">
                                    <span className="type_and_date"><strong>ARTICLE</strong> - 12/1/2012</span>
                                    <h3 className="blog_title">This is a blog title</h3>
                                    <span className="blog_author"> - Author Name</span>
                                    <span className="read_more">Read More</span>
                                </div>
                            </section>
                        </Col>
                        <Col md={{span: 4}} lg={{span: 4}}>
                            <section style={{backgroundImage: "url('/blog/4.jpg')"}}>
                                <div className="blog_card">
                                    <span className="type_and_date"><strong>ARTICLE</strong> - 12/1/2012</span>
                                    <h3 className="blog_title">This is a blog title</h3>
                                    <span className="blog_author"> - Author Name</span>
                                    <span className="read_more">Read More</span>
                                </div>
                            </section>
                        </Col>
                        <Col md={{span: 4}} lg={{span: 4}}>
                            <section style={{backgroundImage: "url('/blog/5.jpg')"}}>
                                <div className="blog_card">
                                    <span className="type_and_date"><strong>ARTICLE</strong> - 12/1/2012</span>
                                    <h3 className="blog_title">This is a blog title</h3>
                                    <span className="blog_author"> - Author Name</span>
                                    <span className="read_more">Read More</span>
                                </div>
                            </section>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span: 6}} lg={{span: 6}}>
                            <section style={{backgroundImage: "url('/blog/1.jpg')"}}>
                                <div className="blog_card">
                                    <span className="type_and_date"><strong>ARTICLE</strong> - 12/1/2012</span>
                                    <h3 className="blog_title">This is a blog title</h3>
                                    <span className="blog_author"> - Author Name</span>
                                    <span className="read_more">Read More</span>
                                </div>
                            </section>
                        </Col>
                        <Col md={{span: 6}} lg={{span: 6}}>
                            <section style={{backgroundImage: "url('/blog/2.jpg')"}}>
                                <div className="blog_card">
                                    <span className="type_and_date"><strong>ARTICLE</strong> - 12/1/2012</span>
                                    <h3 className="blog_title">This is a blog title</h3>
                                    <span className="blog_author"> - Author Name</span>
                                    <span className="read_more">Read More</span>
                                </div>
                            </section>
                        </Col>
                    </Row>
                </Container>
                {/* <div className="blog_grid">
                    <div className="blog_card row1">
                        <span><strong>ARTICLE</strong> - 12/1/2012</span>
                        <h3 className="blog_title">This is a blog title</h3>
                        <span className="blog_author"> - Author Name</span>
                        <span className="read_more">Read More</span>
                    </div>
                    <div className="blog_card row1">
                        <span><strong>ARTICLE</strong> - 12/1/2012</span>
                        <h3 className="blog_title">This is a blog title</h3>
                        <span className="blog_author"> - Author Name</span>
                        <span className="read_more">Read More</span>
                    </div>
                    <div className="blog_card row2">
                        <span><strong>ARTICLE</strong> - 12/1/2012</span>
                        <h3 className="blog_title">This is a blog title</h3>
                        <span className="blog_author"> - Author Name</span>
                        <span className="read_more">Read More</span>
                    </div>
                    <div className="blog_card row2">
                        <span><strong>ARTICLE</strong> - 12/1/2012</span>
                        <h3 className="blog_title">This is a blog title</h3>
                        <span className="blog_author"> - Author Name</span>
                        <span className="read_more">Read More</span>
                    </div>
                    <div className="blog_card row2">
                        <span><strong>ARTICLE</strong> - 12/1/2012</span>
                        <h3 className="blog_title">This is a blog title</h3>
                        <span className="blog_author"> - Author Name</span>
                        <span className="read_more">Read More</span>
                    </div>
                    <div className="blog_card row3">
                        <span><strong>ARTICLE</strong> - 12/1/2012</span>
                        <h3 className="blog_title">This is a blog title</h3>
                        <span className="blog_author"> - Author Name</span>
                        <span className="read_more">Read More</span>
                    </div>
                    <div className="blog_card row3">
                        <span><strong>ARTICLE</strong> - 12/1/2012</span>
                        <h3 className="blog_title">This is a blog title</h3>
                        <span className="blog_author"> - Author Name</span>
                        <span className="read_more">Read More</span>
                    </div>
                </div> */}
            </div>  
        </>
    )
}

export default Blog
