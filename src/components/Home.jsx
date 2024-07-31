import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  background-image: url('path/to/background-image.jpg'); /* Replace with your image */
  background-size: cover;
  color: white;
  text-align: center;
  padding: 100px 0;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

function Home() {
  return (
    <div>
      <Hero>
        <h1>Kalyana Tirupathi Rao</h1>
        <p>Data Science Student | Machine Learning Enthusiast</p>
      </Hero>

      {/* Add more sections for featured projects/blog posts and call to action */}
    </div>
  );
}

export default Home;