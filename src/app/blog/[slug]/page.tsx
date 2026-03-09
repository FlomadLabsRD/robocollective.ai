import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/sections/Footer";
import { BlogPostHero } from "@/components/sections/BlogPostHero";
import { BlogPostContent } from "@/components/sections/BlogPostContent";
import { getBlogPost, blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      <BlogPostHero post={post} />
      <BlogPostContent post={post} />
      <Footer />
    </main>
  );
}
