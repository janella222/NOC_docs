import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    
    <main className="bg-slate-300">
      <SignedOut>
        <div className="grid h-screen place-items-center bg-blue-500 text-white font-bold py-2 px-4 rounded ">
        <SignInButton />

        </div>
      
        </SignedOut>
        <SignedIn>
          <UserButton />
        
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
      </SignedIn>
    </main>
  );
}
