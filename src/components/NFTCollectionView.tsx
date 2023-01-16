/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

import {
    Box,
    Image,
    Stack,
    Text,
    Heading,
    Grid,
    GridItem,
    Center
} from '@chakra-ui/react';

export default function NFTCollectionView() {

    const [nfts, SetNFTs] = useState([]);
    const [assetsHash, SetAssetsHash] = useState("LXBrPTUzMTA4MQ==");

    const getMoreNFTData = () => {

        const getCryptoPuckNfts = async () => {

            const options: object = {
                method: 'GET',
                url: 'https://api.opensea.io/api/v1/assets',
                params: {
                    collection_slug: 'cryptopunks',
                    order_direction: 'desc',
                    limit: '20',
                    cursor: assetsHash
                },
                headers: { Accept: 'application/json' }
            };

            const openseaData = await axios.request(options);

            if (openseaData && openseaData.data) {
                console.log("openseaData.data.assets: ", openseaData.data)
                let array = [...nfts, ...openseaData.data.assets];
                SetNFTs(array as any);
                SetAssetsHash(openseaData.data.next)
            }


            // const openseaData = await axios.get(
            //     `https://api.opensea.io/api/v1/assets?asset_contract_address=0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb&limit=200`
            //     , {
            //         "headers": {
            //             "Accept": "application/json",
            //         }
            //     });
            // if (openseaData && openseaData.data) {
            //     SetNFTs(openseaData.data.assets);
            // }
        };

        return getCryptoPuckNfts();
    }

    return (<>
        <InfiniteScroll
            dataLength={nfts.length}
            next={getMoreNFTData}
            hasMore={true}
            loader={<h3></h3>}
            endMessage={<h4>Nothing more to show</h4>}
        >
            <Center><Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {
                    nfts.map((nft: any, key) => {
                        return <GridItem key={key} p={6}><Box
                            role={'group'}
                            p={6}
                            maxW={'330px'}
                            w={'full'}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            pos={'relative'}
                            zIndex={1}>
                            <Box
                                rounded={'lg'}
                                mt={-12}
                                pos={'relative'}
                                height={'230px'}
                                _after={{
                                    transition: 'all .3s ease',
                                    content: '""',
                                    w: 'full',
                                    h: 'full',
                                    pos: 'absolute',
                                    top: 5,
                                    left: 0,
                                    // backgroundImage: `url(${nft?.image_url})`,
                                    filter: 'blur(15px)',
                                    zIndex: -1,
                                }}
                                _groupHover={{
                                    _after: {
                                        filter: 'blur(20px)',
                                    },
                                }}>
                                <Image
                                    rounded={'lg'}
                                    height={230}
                                    width={282}
                                    objectFit={'cover'}
                                    src={nft?.image_url}
                                    alt={nft?.name}
                                />
                            </Box>
                            <Stack pt={10} align={'center'}>
                                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>

                                </Text>
                                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                    {nft?.name}
                                </Heading>

                            </Stack>
                        </Box>
                        </GridItem>
                    })
                }
            </Grid></Center>

        </InfiniteScroll>
    </>)
}
