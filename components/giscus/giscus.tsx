import { Giscus } from '@giscus/react'

const GiscusBox = ({ slug }: { slug: string }) => {
  return (
    <>
      <Giscus
        repo="team-Twilight/BlogDiscussionTest"
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID}
        category="General"
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        mapping="pathname"
        term={slug}
        reactionsEnabled="1"
        emitMetadata="0"
        theme="white"
      />
    </>
  )
}

export default GiscusBox