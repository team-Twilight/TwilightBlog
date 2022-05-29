This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# github 관련 협업 간단 정리
### 1. 원격 최신 변경사항들 다 가져오기 
```bash
> git pull
```
### 2. 작업할 브랜치 만들기 
```bash
> git switch main
> git branch name
# 브랜치명 rule 
# feat/blah-blah-blah 기능추가 등
# docs/blah-blah-blah 문서작업 등
# fix/blah-blah-blah 버그 수정 등
> git switch name
```
### 3. 작업하기 
```bash
작업을 한다.
> git add something
> git commit => (vi 편집기에서 커밋메시지 )
# 커밋메시지 룰
# 한글로 작성 
# ex
# 무엇무엇을 수정함 추가함
# (한줄 띄고)
# (선택적인 설명사항 쭉쭉)
중간에 다른 브랜치에서 작업해야한다
git stash --include-untracked
git switch somewhere
돌아온다
git switch home
git stash list 
git stash pop
작업 다시 진행
```
### 4. 원격에 반영하기 
```
> git switch main 
> git pull 
> git switch 작업하던브랜치
> git rebase main 
> 충돌 있으면 해결 
> git push origin 작업하던브랜치
> github 에 들어가서 PR생성 (동료에게 코드 리뷰 부탁해도됨)
> github 에서 PR 수락 (셀프 수락)
> 다시 컴퓨터로 돌아와서 원격저장소를 로컬에 최신화
> git pull 
다시 1부터 시작 

```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
