import React, { useState, useEffect } from "react";
import Social from "./Social";
import client from "../client";
import Modal from "react-modal";
import PortableText from "react-portable-text";

export default function SinglePost() {
  const [posts, setPosts] = useState([]);
  const [state, setState] = useState({ isOpen: false, postId: null });

  function openModal(_key) {
    setState({ isOpen: true, postId: _key });
  }

  function closeModal() {
    setState({ isOpen: false, postId: null });
  }

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "post"] | order(_createdAt desc){
      _id,
      _createdAt,
      title,
      author -> {
      name,
      image
    },
      description,
      slug,
      mainImage{
        asset -> {
          _id,
          url
        }
      },
      image,
      body
  }
    `
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Modal
          isOpen={state.isOpen}
          onRequestClose={closeModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
          key={state.postId}
        >
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(" + post.mainImage.asset.url + ")",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">{post.author.name}</a>
                    <span>{new Date(post._createdAt).toLocaleString()}</span>
                  </p>
                </div>
                <h3 className="title">{post.title}</h3>
                <div>
                  <PortableText
                    dataset="production"
                    projectId="ovsx12m8"
                    key={post._id}
                    content={post.body}
                    serializers={{
                      h1: (props) => (
                        <h1 className="text-2xl font-bold my-5" {...props} />
                      ),
                      h2: (props) => (
                        <h2 className="text-xl font-bold my-5" {...props} />
                      ),
                      li: (children) => (
                        <li className="ml-4 list-disc">{children}</li>
                      ),
                      link: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-blue-500 hover:underline"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  />
                </div>
              </div>
              {/* END DETAILS */}
              <div className="main_content ">
                <div className="descriptions"></div>
                {/* END DESCRIPTION */}
                <div className="news_share">
                  <span>Share:</span>
                  <Social />
                  {/* END SOCIAL SHARE */}
                </div>
                {/* END NEWS SHARE */}
              </div>
            </div>
          </div>
          <div className="tokyo_tm_modalbox_news">
            <button className="close-modal" onClick={closeModal}>
              <img src="assets/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <SinglePost />
            {/* END BOX INNER */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
      ))}
    </div>
  );
}
