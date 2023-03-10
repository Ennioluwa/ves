interface Post {
  name: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  time: string;
  author: string;
  content: { type: string; text: string[] }[];
}
interface Gallery {
  title: string;
  header: string;
  slug: string;
  content: string[];
  images: string[];
  review: {
    content: string;
    name: string;
    title: string;
  };
}
