import { getMyAllNotePosts, getMyAllQiitaPosts } from "@/lib/hook/useArticle";
import HomeSectionContainer from "./HomeSectionContainer";
import QiitaArticleList from "./QiitaArticleList";
import NoteArticleList from "./NoteArticleList";
import SubSectionTitle from "./SubSectionTitle";

export default async function HomeArticle () {
  const noteItems = (await getMyAllNotePosts()).noteItems;
  const qiitaItems = (await getMyAllQiitaPosts()).qiitaItems;


  return (
    <>
      <HomeSectionContainer title={'Article'}>

        <SubSectionTitle title={'note'} />
        <NoteArticleList allArticles={noteItems} />

        <SubSectionTitle title={'Qiita'} />
        <QiitaArticleList allArticles={qiitaItems} />
        {/* <BlogList allBlogs={contents} />
        { contents.length > 3 && 
          <Box>
            <Link href={'/blog'}>すべての記事を見てみる</Link>
          </Box>
        } */}
      </HomeSectionContainer>
    </>
  );
}