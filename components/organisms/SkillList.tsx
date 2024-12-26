import { FC, memo } from "react";

import { List, ListItem, ListItemText, Typography } from "@mui/material";

const SkillList:FC = memo(() => {
  return (
    <>
      <List className='skillList'>
        <ListItem className='skillList__item'>
          {/* <ListItemText className='skillList__item--text'> */}
            <Typography component={'h2'}>フロントエンド</Typography>
            <Typography component={'p'}>ランディングページ、コーポレートサイト、SPAなどの作成可能です。</Typography>
            <Typography component={'h3'}>言語 / フレームワーク</Typography>
            <Typography component={'p'}>HTML, CSS, Sass, Bootstrap, TailwindCSS, Javascript, jQuery, React, Next.js, <br />Chakra-UI, MUI</Typography>
          {/* </ListItemText> */}
        </ListItem>
        <ListItem className='skillList__item'>
          {/* <ListItemText className='skillList__item--text'> */}
            <Typography component={'h2'}>バックエンド</Typography>
            <Typography component={'p'}>CMSを使ったサイトやAPI構築、<br />スクレイピングツールなど作成可能です。</Typography>
            <Typography component={'h3'}>言語 / フレームワーク</Typography>
            <Typography component={'p'}>Python, Java, PHP, Symfony, <br />Drupal, Drush, Wordpress</Typography>
          {/* </ListItemText> */}
        </ListItem>
        <ListItem className='skillList__item'>
          {/* <ListItemText className='skillList__item--text'> */}
            <Typography component={'h2'}>ミドルウェア / インフラ等</Typography>
            <Typography component={'p'}>CUI操作、Webアプリ基盤の構築、<br />各種ファイルのバージョン管理が可能です。</Typography>
            <Typography component={'h3'}>ツール / サービス</Typography>
            <Typography component={'p'}>Linux, Apache, MySQL, PostgreSQL,<br />AWS(EC2, RDS, Redshift, S3, Route53), Git, GitHub, Firebase, Vercel, Netlify</Typography>
          {/* </ListItemText> */}
        </ListItem>
      </List>
    </>
  )
});

SkillList.displayName = "SkillList";
export default SkillList;