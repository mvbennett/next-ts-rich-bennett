import React from "react";
import Navbar from "./Navbar";
// import Image from "next/image";
import Form from "./Form";

import postList from '../content/posts';
// import underwaterVinyl from '../public/images/underwatervinyl.webp'
import Post from "./Post";

const Latest = () => {
  // const postList = [
  //   {
  //     img: underwaterVinyl,
  //     title: 'Music for Underwater Supermarkets now on vinyl',
  //     content: 'Music for Underwater Supermarkets now returns with a vinyl format from Roman Angelos. Have you ever wondered what it would be like to explore a submerged supermarket? What would such a place look like, what would they sell, and most importantly; what kind of music would be playing? Now you can find out on this beautiful color vinyl.',
  //     link: "https://happyrobotsrecords.bandcamp.com/album/music-for-underwater-supermarkets",
  //     linkText: "Order on Bandcamp"
  //   }
  // ]

  const posts = postList.map(post => <Post post={post} key={post.title} />)
  return (
    <div>
      <Navbar page="home" />
      <div className="container">
        {posts}
        {/* <Form /> */}
        {/* <div className="latest-post">
          <Image className="latest-img" src={underwaterVinyl} alt="Music for Underwater Supermarkets Vinyl" />
          <div className="latest-post-content">
            <h3>Music for Underwater Supermarkets now on vinyl</h3>
            <p>
              Music for Underwater Supermarkets now returns with a vinyl format from Roman Angelos.
              Have you ever wondered what it would be like to explore a submerged supermarket?
              What would such a place look like, what would they sell, and most importantly;
              what kind of music would be playing?
              Now you can find out on this beautiful color vinyl.
            </p>
            <a
              href="https://happyrobotsrecords.bandcamp.com/album/music-for-underwater-supermarkets"
              target="_blank"
              rel="noreferrer"
            >
              Order on Bandcamp
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Latest;
