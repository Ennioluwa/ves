interface Post {
  name: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  time: string;
  author: string;
  authorImage: string;
  content: { type: string; text: string[] }[];
}
interface Gallery {
  heroImage: string;
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
