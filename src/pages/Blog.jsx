// src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => (
  <div className="blog-timeline-container">
    <div className="blog-timeline">
      <div className="blog-timeline-line"></div>
      <div className="blog-timeline-items">
        {[
          {
            title: "Linear, poly, cubic-spline interpolations",
            date: "Jan 2025",
            link: "/blog/TODO"
          },
          // Add more blog posts here
        ].map((post, index) => (
          <div key={index} className="blog-timeline-item">
            <div className="blog-timeline-dot"></div>
            <div className="blog-post-content">
              <span className="blog-date">{post.date}</span>
              <Link to={post.link} className="blog-title">
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
