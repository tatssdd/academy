import MyModal from '../modal/modal';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import axios from 'axios';

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Infos = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

const fetchComments = async (postId) => {
  const comments_arr: Comments[] = [];
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  for (const data of response.data) {
    const comment: Comments = {
      postId: data.postId,
      id: data.id,
      name: data.name,
      email: data.email,
      body: data.body,
    };
    comments_arr.push(comment);
  }
  return comments_arr;
};

const fetchPostInfo = async (postId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  const json = await res.json();
  return Infos.parse(json);
};

const PostInfo = ({ postId, modalType, isOpen, onClose }) => {
  let queryKey;

  if (modalType === 'comments') {
    queryKey = ['comments', postId];

    const { data, error, isLoading } = useQuery({
      queryKey,
      queryFn: () => fetchComments(postId),
    });

    if (isLoading) return <div>Loading comments...</div>;
    if (error) return <div>Error loading comments</div>;

    return (
      <MyModal
        data={data}
        modalType={modalType}
        isOpen={isOpen}
        onClose={onClose}
        onRefresh={fetchComments}
      />
    );
  } else if (modalType === 'info') {
    queryKey = ['infos', postId];

    const { data, error, isLoading } = useQuery({
      queryKey,
      queryFn: () => fetchPostInfo(postId),
    });

    if (isLoading) return <div>Loading info...</div>;
    if (error) return <div>Error loading info</div>;

    return (
      <MyModal
        data={data}
        modalType={modalType}
        isOpen={isOpen}
        onClose={onClose}
      />
    );
  } else {
    return <div>Error loading data</div>;
  }
};

export default PostInfo;
