import Image from "next/image";

import { getMyAllQiitaPosts } from "@/lib/hook/useArticle";


export default async function Page() {
  const qiitaItems = (await getMyAllQiitaPosts()).qiitaItems;

  return (
    <>
      <ul>
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