import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import PortableText from "react-portable-text";
import client from "../client";

export default function News() {
  const [posts, setPosts] = useState([]);
  const [state, setState] = useState({ isOpen: false, postId: null });

  const openModal = React.useCallback(
    (_key) => () => {
      setState({ isOpen: true, postId: _key });
    },
    []
  );

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
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>News</span>
              <h3>Latest News</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}
        {posts.map((post) => (
          <div className="preven" key={post._id}>
            <ul>
              <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner">
                  <div className="image" onClick={openModal(post._id)}>
                    <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage:
                          "url(" + post.mainImage.asset.url + ")",
                      }}
                    ></div>
                  </div>
                  {/* END IMAGE */}
                  <div className="details">
                    <div className="extra">
                      <p className="date">
                        By {post.author.name}
                        <span>
                          {new Date(post._createdAt).toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                    {/* END EXTRA */}
                    <h3 className="title" onClick={openModal(post._id)}>
                      {post.title}
                    </h3>
                    <div className="tokyo_tm_read_more">
                      <a>
                        <span onClick={openModal(post._id)}>Read More</span>
                      </a>
                    </div>
                    {/* END READ MORE BUTTON */}
                  </div>
                  {/* END DETAILS */}
                </div>
                <Modal
                  isOpen={state.isOpen}
                  onRequestClose={closeModal}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  key={post._id == state.postId}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={closeModal}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(" + post.mainImage.asset.url + ")",
                            }}
                          ></div>
                        </div>
                        {/* END IMAGE */}
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              By {post.author.name}
                              <span>
                                {new Date(post._createdAt).toLocaleString()}
                              </span>
                            </p>
                          </div>
                          <h3 className="title">{}</h3>
                          <div>
                            <PortableText
                              dataset={
                                process.env.REACT_APP_SANITY_STUDIO_API_DATASET
                              }
                              projectId={
                                process.env
                                  .REACT_APP_SANITY_STUDIO_API_PROJECT_ID
                              }
                              content={post.body}
                              serializers={{
                                h1: (props) => (
                                  <h1
                                    className="text-2xl font-bold my-5"
                                    {...props}
                                  />
                                ),
                                h2: (props) => (
                                  <h2
                                    className="text-xl font-bold my-5"
                                    {...props}
                                  />
                                ),
                              }}
                            />
                          </div>
                        </div>
                        {/* END DETAILS */}
                        <div className="main_content ">
                          <div className="descriptions"></div>
                          {/* END DESCRIPTION */}
                          {/* <div className="news_share">
                            <span>Share:</span>
                            <Social />
                          </div> */}
                          {/* END NEWS SHARE */}
                        </div>
                      </div>
                    </div>
                    {/* END BOX INNER */}
                  </div>
                  {/* END MODALBOX NEWS */}
                </Modal>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
