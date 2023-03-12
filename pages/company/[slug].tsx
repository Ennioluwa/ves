import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Blog, Footer, Navbar, OtherPosts } from "../../components";
import { posts } from "../../data/posts";

interface Props {
  post: Post;
  otherPosts: Post[];
}

const blog = ({ post, otherPosts }: Props) => {
  return (
    <div>
      <Navbar text="company" />
      <Blog post={post} otherPosts={otherPosts} />
      <OtherPosts otherPosts={otherPosts} />
      <Footer />
    </div>
  );
};

export default blog;

export async function getStaticPaths() {
  const slugs = posts.map((post) => post.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const post = posts.find((post) => post.slug === params.slug);
  const otherPosts = posts.filter((post) => post.slug !== params.slug);
  return { props: { post, otherPosts } };
}
