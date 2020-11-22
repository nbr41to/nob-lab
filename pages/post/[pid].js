import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  const messages = { 123: "おはよう", 456: "こんにちは", nob: "こんばんは" }

  return <p>{messages[pid]}!!</p>;

};

export default Post;