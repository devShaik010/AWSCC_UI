import React from 'react';
import "./CtaSection.css";
import { Container } from "react-bootstrap";
import { FaArrowRight, FaCalendar, FaUser } from 'react-icons/fa';

function RecentBlogs() {
  const blogs = [
    {
      title: "Getting Started with AWS Cloud",
      excerpt: "Learn the fundamentals of AWS and start your cloud journey...",
      author: "AWS Cloud Club",
      date: "Mar 15, 2024",
      image: "https://i0.wp.com/amach.com/wp-content/uploads/2023/10/aww-logo-blue-background.png?resize=1024%2C1024&ssl=1",
      category: "Cloud Computing"
    },
    {
      title: "Building Serverless Applications",
      excerpt: "Explore the power of serverless architecture with AWS Lambda...",
      author: "Tech Team",
      date: "Mar 12, 2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/2048px-Amazon_Lambda_architecture_logo.svg.png",
      category: "Development"
    },
    {
      title: "AWS Certification Guide",
      excerpt: "A comprehensive guide to AWS certification paths...",
      author: "Certification Team",
      date: "Mar 10, 2024",
      image: "https://miro.medium.com/v2/resize:fit:600/1*-h8T9GyF8a8yJfD3_qbEkA.jpeg",
      category: "Certification"
    },
    {
      title: "Cloud Security Best Practices",
      excerpt: "Essential security practices for your AWS infrastructure...",
      author: "Security Team",
      date: "Mar 8, 2024",
      image: "https://dhiyaneshgeek.github.io/images/cloud/aws-logo.png",
      category: "Security"
    }
  ];

  return (
    <section className="blogs-section">
      <div className="section-bg">
        <div className="light-effect le1"></div>
        <div className="light-effect le2"></div>
      </div>

      <Container>
        <div className="section-header">
          <div className="title-wrapper">
            <h2>Recent Blogs</h2>
            <a href="/blogs" className="view-all">
              View All <FaArrowRight />
            </a>
          </div>
          <p className="section-subtitle">Stay updated with our latest articles and insights</p>
        </div>

        <div className="blogs-slider">
          <div className="blogs-track">
            {blogs.map((blog, index) => (
              <article key={index} className="blog-card1">
                <div className="card1-image">
                  <img src={blog.image}   />
                  <span className="category">{blog.category}</span>
                </div>
                <div className="card1-content">
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <div className="card1-meta">
                    <span><FaUser /> {blog.author}</span>
                    <span><FaCalendar /> {blog.date}</span>
                  </div>
                  <a href={`/blog/${index}`} className="read-more">
                    Read More <FaArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default RecentBlogs;
