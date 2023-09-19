"use client"
import { useState } from "react"
import { getPostDetails } from "@/api/apiClient"
import { useRouter } from 'next/router'
export const dynamic = 'force-dynamic'
import Head from 'next/head';


const Page = ({ params }) => {
    const router = useRouter()
    // const match = inputString?.match(/\/([^/]+)$/);
    // const result = match ? match[1] : '';
    const [postData, setPostData] = useState(null)
    // console.log(router.query.slug)
    getPostDetails(router.query.slug)
        .then(response => {
            setPostData(response)
        })
        .catch(error => {
            setPostData(null)
        });
    return (
        <div className="h-screen">
              <Head>
        <title>{postData?.topic || 'Default Title'}</title>
        
        <meta name="description" content={postData?.postContent || 'Default Description'} />

        <meta property="og:image" content={postData?.postUrl ? postData?.postUrl : postData?.thumbnailUrl || 'default-image-url'} />
      </Head>
        <div className="flex flex-col h-screen">
          <nav className=" bg-[#492A78] p-4 flex pl-[0px] min-[900px]:pl-[422px]  screens-tablet justify-center min-[900px]:justify-start items-center">
            <img src="assets/navicon.svg" alt="Logo" className="h-[50px]  w-auto" />
          </nav>
          <div className='overflow-y-auto h-[75vh]'>
            <div className='mx-[21px] relative rounded-md min-[900px]:mx-[421px] bg-[#FFFF] min-h-[30vh] mt-[30px]'>
              <div className='py-8 px-4  capitalize text-sm  '>
                {postData?.postContent}                </div>
              {postData?.postUrl ? <div className='mx-4 mt-4 pb-4 mb-[6vh] h-[auto] grid justify-center items-center'>
                <img className='' src={postData?.thumbnailUrl ? postData?.thumbnailUrl : postData?.postUrl} alt={postData?.postUrl} />
              </div> : null}
  
              <div className="border-t-4 bg-white absolute w-[100%]  bottom-[15px] pt-4  flex justify-between items-center px-4">
                <div className="flex items-center">
                  <div className='capitalize'>{postData?.topic}</div>
                  <div className='text-[#9870D6] pl-2 capitalize'>{postData?.language}</div>
                </div>
                <div className="flex items-center justify-end">
                  <img src='/assets/share.png' alt="share" />
                  <div className='capitalize pl-2'>{postData?.shared}</div>
                </div>
                <div className="flex items-center justify-end">
                  <img src='/assets/like.png' alt="like" />
                  <div className='capitalize pl-2'>{postData?.likedBy}</div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-[#FFFF] p-[10px] w-[100%]  bottom-0 absolute w-[100vw] rounded-t-lg
        min-h-[10vh] max-h-[17vh] flex-1 min-[900px]:flex justify-center items-center">
            <div className=" flex justify-center items-center mt-[20px]">
              <img src="assets/footer.png" alt="Play Store" className="h-10 w-auto m-[10px] " />
            </div>
            <div className="flex justify-center items-center">
              <p className='fontNew min-[900px]:pt-[20px] text-[20px] font-[800] text-[#492A78]'>Download the kidde Budde app To enjoy more</p>
            </div>
            <div className="flex min-[900px]:mt-[20px] space-x-4flex justify-center items-center ">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="assets/appstore.png" alt="App Store" className="h-10 w-auto m-[10px]" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="assets/playstore.png" alt="Play Store" className="h-10 w-auto m-[10px]" />
              </a>
            </div>
          </footer>
        </div>
      </div>
    )
}
export default Page


