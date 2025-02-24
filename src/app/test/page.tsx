import Image from "next/image";

import { getMyAllNotePosts, getMyAllQiitaPosts } from "@/lib/hook/useArticle";


export default async function Page() {
  const noteItems = (await getMyAllNotePosts()).noteItems;
  const qiitaItems = (await getMyAllQiitaPosts()).qiitaItems;

  return (
    <>
      <ul style={{marginBottom:'30px'}}>
        {noteItems && noteItems.map((item, index) => (
          <li key={index} style={{marginBottom:'10px'}}>
            <Image
              alt={`${item.title}のOGP画像`}
              height={630}
              src={item.ogpImageUrl}
              width={1200}
              priority={true}
            />
            <p>{item.title}</p>
            <p>{item.pubDate}</p>
          </li>
        ))}
      </ul>

      <ul style={{marginBottom:'30px'}}>
        {qiitaItems && qiitaItems.map((item, index) => (
          <li key={index} style={{marginBottom:'10px'}}>
            <Image
              alt={`${item.title}のOGP画像`}
              height={630}
              src={item.ogpImageUrl}
              width={1200}
              priority={true}
            />
            <p>{item.title}</p>
            <p>{item.created_at}</p>
          </li>
        ))}
      </ul>
    </>
  );
}