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
      </HomeSectionContainer>
    </>
  );
}