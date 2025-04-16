import { useState, useEffect } from 'react';
import PostInfo from '../postinfo/PostInfo';
import './PostList.css';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  id: string;
  title: string;
  body: string;
}

const modalTypes = ['comments', 'info'];

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setSelectedButton] = useState<string | null>(null);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error(`error fetching data: ${response.status}`);
        }
        const posts = await response.json();
        setPosts(posts);
      } catch (e) {
        console.error(e);
        return <div>Something went wrong. please. try again later</div>;
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);
  return (
    <>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <ul>
          {posts.map((post: Post) => (
            <li
              key={post.id}
              className='border border-black rounded bg-sky-200/30 flex flex-col gap-2 items-center'
            >
              <h3>
                <strong>Название: </strong>
                {post.title}
              </h3>
              <p>
                <strong>Описание: </strong>
                {post.body}
              </p>
              <div className='flex justify-center gap-3 '>
                <button
                  onClick={() => {
                    setSelectedPostId(post.id);
                    setIsModalOpen(true);
                    setSelectedButton(modalTypes[0]);
                  }}
                >
                  Comments
                </button>
                <button
                  onClick={() => {
                    setSelectedPostId(post.id);
                    setIsModalOpen(true);
                    setSelectedButton(modalTypes[1]);
                  }}
                >
                  Info
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {selectedPostId !== null && isModalOpen && (
        <PostInfo
          postId={selectedPostId}
          modalType={modalType}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default PostList;
