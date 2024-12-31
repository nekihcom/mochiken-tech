'use client';
import axios from "axios";
import { useCallback, useState } from "react";

import { apiSource } from "@/config/site";
import { Keyvisual } from "@/type/api";


export const useGetKeyvisual = () => {
    // const [loading, setLoading] = useState<boolean>(false);
    const [keyvisual, setKeyvisual] = useState<Keyvisual | null>(null);

    const getKeyvisual = useCallback(() => {
        // setLoading(true);
        axios.get('https://api.mochiken.blog/api/keyvisual')
        .then((res) => {
          let fetchData = res.data[0];

          const avatartAbsolutePath = apiSource + fetchData.field_avatar;
          fetchData.field_avatar = avatartAbsolutePath;

          const escapeBody = new DOMParser().parseFromString(fetchData.body, "text/html").body.firstElementChild?.innerHTML;

          fetchData.body = escapeBody;

          setKeyvisual(fetchData);
        })
        .catch(() => {
        })
        .finally(() => {
          // setLoading(false);
        });
    }, []);
    return { 
      getKeyvisual, 
      // loading, 
      keyvisual
    }
}