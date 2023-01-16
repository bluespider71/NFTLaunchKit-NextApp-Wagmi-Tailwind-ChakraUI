import type { NextPage } from 'next'
import { AppLayout } from '@/layout/AppLayout';
import Banner from '@/components/Banner';
import NFTCollectionView from '@/components/NFTCollectionView';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Banner />
      <NFTCollectionView />
    </AppLayout>
  )
}

export default Home
