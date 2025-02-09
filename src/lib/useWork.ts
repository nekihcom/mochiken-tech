import { Work } from '@/type/type';
import { createClient } from 'microcms-js-sdk';

if (!process.env.SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY_WORK) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY_WORK,
});

// 作品一覧を取得
export const getWorks = async () => {
    const works = await client.getList<Work>({
      endpoint: "work"
    });
    return works;
}

// 作品の詳細を取得
export const getDetail = async (contentId: string) => {
    const work = await client.getListDetail<Work>({
      endpoint: "work",
      contentId,
    });
    return work;
};


