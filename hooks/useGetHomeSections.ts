'use client';
import axios from "axios";
import { useCallback, useState } from "react";

import { apiSource } from "@/config/site";
import { Keyvisual, Profile } from "@/type/api";


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

          const stringBody = new DOMParser().parseFromString(fetchData.body, "text/html").body.firstElementChild?.innerHTML.toString();
          const splitedBody = stringBody && stringBody.split('<br>');

          fetchData.body = splitedBody;

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



export const useGetProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  const getProfile = useCallback(() => {
      axios.get('https://api.mochiken.blog/api/profile')
      .then((res) => {
        let fetchData = res.data[0];

        const stringBody = new DOMParser().parseFromString(fetchData.body, "text/html").body.firstElementChild?.innerHTML.toString();
        const splitedBody = stringBody && stringBody.split('<br>');
        fetchData.body = splitedBody;

        setProfile(fetchData);
      })
      .catch(() => {
      })
      .finally(() => {
      });
  }, []);
  return { 
    getProfile, 
    profile
  }
}