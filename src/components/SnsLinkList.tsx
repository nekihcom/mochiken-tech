import { Grid, GridItem } from '@chakra-ui/react';
import SnsLinkCard from './SnsLinkCard';
import { SnsLinkList } from '@/data/data';


const SnsCardLinkList = () => {
  return (
    <>
      <Grid
        templateColumns={{base:'repeat(1, minmax(0, 1fr))', sm:'repeat(2, minmax(0, 1fr))', md:'repeat(1, minmax(0, 1fr))'}}
        gap={1}
        maxW={'36rem'}
        w={{base:'100%', md:'18rem'}}
        alignContent={'center'}
      >
        { SnsLinkList && SnsLinkList.map((sns, index)=>(
          <GridItem key={index} borderRadius={5} p={3} w={'100%'} backgroundColor={sns.color} maxH={'72px'}>
            <SnsLinkCard sns={sns} />
          </GridItem>
        ))}
        {/* <GridItem borderRadius={5} p={3} w={'100%'} backgroundColor={''} maxH={'80px'}>
          <SnsLinkCard sns={undefined} />
        </GridItem> */}
      </Grid>
    </>
  );
};
export default SnsCardLinkList;