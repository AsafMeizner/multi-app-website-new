'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation';

type Props = {
  params: {
    slug: string
  }
}

const page = ({params}: Props) => {
    //check if the slug is the ending of a youtube url and then redirect to "catblik.tech/youtube/[slug]" if not redirect to "catblik.tech"
    //youtube url exapmle: https://www.youtube.com/watch?v=cpp69ghR1IM
    //The 11-character base64 string is just an encoded long integer.
    //The long integer is the video id.

    // const router = useRouter();
    // const YoutubeBaseUrl = 'https://catblik.tech/';

    // if (params.slug){
    //   router.replace(params.slug.includes("watch?v=") ? `${YoutubeBaseUrl}${params.slug.split("watch?v=")[1]}` : 'https://catblik.tech/YoutubeDownloader');
    // } else if (params.slug.match(/\.(png|jpg|mp4)$/)) {
    // } else if (params.slug.includes("shorts/")) {
    //   router.replace('https://catblik.tech/youtubeShorts' + params.slug.split("shorts/")[1]);
    // } else {
    //   router.replace('https://catblik.tech');
    // } 
}

export default page