import SnsIconLinkList from "@/components/SnsIconLinkList";
import { Box, Flex, Heading, Image, List, Text } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"
import Link from "next/link";


type PrimaryTitleProps = {
  title: string;
}
const PrimaryTitle = (props:PrimaryTitleProps) => {
  const { title } = props;
  return (
    <Box mb={10}>
      <Heading as={'h2'} py={3} px={3} display={'inline-block'} borderRadius={10} fontWeight={'700'} fontSize={'2rem'}  backgroundColor={'teal.600'}>
        <Text color={'#fff'}>{title}</Text>
      </Heading>
    </Box>
  );
}


type SecondaryTitleProps = {
  title: string;
}
const SecondaryTitle = (props:SecondaryTitleProps) => {
  const { title } = props;
  return (
    <Box mb={10}>
      <Heading as={'h2'} py={3} px={3} display={'inline-block'} borderRadius={10} fontWeight={'700'} fontSize={'2rem'} border={'2px solid'} borderColor={'teal.600'}>
        <Text color={'teal.600'} textTransform={'uppercase'}>{title}</Text>
      </Heading>
    </Box>
  );
}



const BiographyAccordion = () => {
  return (
    <AccordionRoot collapsible defaultValue={["5"]}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionItemTrigger backgroundColor={`teal.${(index%2)+6}00`} borderRadius={10} px={5} py={3} mb={5}>
            <Flex>
              <Flex mr={10} backgroundColor={'white'} borderRadius={10} py={1} px={2} fontWeight={700} align={'center'}><Text>{item.date}</Text></Flex>
              <Flex color={'white'} align={'center'} fontWeight={700}><Text>{item.title}</Text></Flex>
            </Flex>
          </AccordionItemTrigger>
          <AccordionItemContent px={2} pb={10}>{item.text}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}
const items = [
  { value: "1", title: "埼玉県にて爆誕", date:"1997.02.11", text: <>小学５年生のときに父親のVaioのデスクトップPCを触ったことがITとの出会いでした。</> },
  { value: "2", title: "成蹊大学理工学部情報科学科　卒業", date:"2019.03", text: <>情報数学、ネットワーク、データベース、プログラミング、画像・音声・映像処理など幅広く学びました。<br />当時人工知能が徐々に注目されていたため、自然言語処理に注力しました。<br /><br/ >卒業研究：Twitterのツイートを使った会話文生成モデルの構築とそのモデルを活用したチャットbotの開発</> },
  { value: "3", title: "SIer企業に入社、CMSを使ったWEB開発を行うチームに参画。", date:"2019.04", text: <>大学で学んだことを活かし、色々な業界の色々なシステムに携わりたい理由からSIerに就職しました。<br /><br />配属後はDrupalを使ってWEBサイトを構築、運用、保守するチームへ、<br />メンバーだけでなくプロジェクトリーダーとしても参画できました。</> },
  { value: "4", title: "個人事業を始める。ECサイト、コーポレートサイトの構築、IT教育に従事。", date:"2022.01", text: <><Text as={'span'} fontWeight={700}>明日会社が無くなっても生きていける人になりたい</Text>と思い、副業を始めました。<br /><br />中小企業様を中心にサイト構築や運用のご支援、<br />またITに関する教育動画配信サービスのアシスタントなどをやっています。</> },
  { value: "5", title: "社内都合により異動。医療系セールス＆マーケティングをITで支援するチームに参画。", date:"2023.04.", text: <>社内の人材育成の都合により、入社当初から参画していたWEB関連の部署を離れ、<br />医薬業界の販売管理、営業、マーケティングをITで支援する部署に異動しました。<br /><br/>これまで異なりデータウェアハウスやそれを活用したBIプラットフォームの構築を行うプロジェクトのリーダーを担当しています。</> },
]



const Page = () => {
  return (
    <>
      <PrimaryTitle title={'もちけん / Mochiken'} />
      <Flex justify={'start'} mb={32} flexDirection={{base:'column-reverse', md:'row'}}>
        <Box w={{md:'50%'}}>
          <Box mb={5}>
            <Text>1997年生まれ、埼玉県出身、東京都在住。</Text>
            <Text>フロントエンドもバックエンドもやるシステムエンジニア。</Text>
          </Box>
          <Box maxW={'150px'} mb={5}>
            <SnsIconLinkList />
          </Box>
          <Box mb={5}>
            <Text>📮 <Link href={'mailto:nekihcom0@gmail.com'}><Text as={'span'} color={'teal.600'} textDecoration={'underline'} _hover={{opacity:0.5}}>nekihcom0@gmail.com</Text></Link></Text>
          </Box>
        </Box>
        <Flex w={{base:'auto', md:'20%'}} justify={{base:'center', md:'start'}}>
          <Image maxW={'200px'}  src="/profile/me2.png"/>
        </Flex>
      </Flex>
      

      <SecondaryTitle title={'技術スタック / Skills'} />
      <List.Root mb={32} as={'ol'} pl={3}>
        <List.Item mb={3}><Text>・HTML / CSS / Sass / JavaScript / TypeScript / React / Next.js / jQuery</Text></List.Item>
        <List.Item mb={3}><Text>・PHP / Symfony / Python / Django / Ruby / Rails / Java</Text></List.Item>
        <List.Item mb={3}><Text>・Wordpress / Drupal / microCMS / Power BI</Text></List.Item>
        <List.Item mb={3}><Text>・Apache / MySQL / PostgreSQL / Git / GitHub / GitHubAction</Text></List.Item>
        <List.Item mb={3}><Text>・AWS / Vercel / Firabase / GTM / GA / GAS</Text></List.Item>
        <List.Item mb={3}><Text>・Figma</Text></List.Item>
      </List.Root>
      

      <SecondaryTitle title={'趣味 / Hobby'} />
      <Box mb={32}>
        <Text>野球⚾️、バドミントン🏸、筋トレ🏋️、散歩🚶、お笑い🎙️</Text>
      </Box>


      <SecondaryTitle title={'経歴 / Biography'} />
      <Box mb={32}>
        <BiographyAccordion />
      </Box>


      <SecondaryTitle title={'Works / 作品'} />
      <Text>当サイトを含め、これまでに手がけた実績を公開しております。<br />ぜひご覧ください。</Text>
      <Box mt={5} position={'relative'} w={'30%'} minW={'153px'}>
        <Text 
          _after={{
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 0,
            height: '2px',
            backgroundColor: 'teal.600',
            transition: 'all 0.3s'
          }}
          _hover={{
            _after: {
              width: '100%'
            }
          }}
        >
          <Link href={'/work'}><Text as={'span'} transition={'all 0.3s'} fontWeight={700} _hover={{color: 'teal.600'}}>作品を見てみる　→</Text></Link>
        </Text>
      </Box>
    </>
  );
}
export default Page;