import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Blog Post 1',
    summary: 'A short summary of Blog Post 1.',
    imageUrl: 'path/to/image1.jpg',
    content: 'Full content of Blog Post 1.',
  },
  {
    id: 2,
    title: 'Blog Post 2',
    summary: 'A short summary of Blog Post 2.',
    imageUrl: 'path/to/image2.jpg',
    content: 'Full content of Blog Post 2.',
  },
];

function Blog() {
  return (
    <section>
      <h2>My Blog</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <img src={post.imageUrl} alt={post.title} />
            <p>{post.summary}</p>
            {/* You can add a link to the full blog post here */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
