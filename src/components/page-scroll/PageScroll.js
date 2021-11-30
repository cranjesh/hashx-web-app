import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { setFeedCurrCardIndex } from '../../containers/FeedPage/actions'
import ReactPageScroller from "react-page-scroller";
import Image from "./Image";
import { useReadIdentityApi, identityDataPost } from '../custom-hooks/readIdentityApi'
import "./index.css";

let images = [
  {
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"01"
  },
  {
    src: "https://images.unsplash.com/photo-1491927570842-0261e477d937?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "bose",
    id:"02"
  },
  {
    src: "https://images.unsplash.com/photo-1548378329-437e1ef34263?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "sony",
    id:"03"
  },
  {
    src: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"04"
  },
  {
    src: "https://images.unsplash.com/photo-1616750819287-955503f65d42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"05"
  },
  {
    src: "https://images.unsplash.com/photo-1548378329-437e1ef34263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"06"
  },
  {
    src: "https://images.unsplash.com/photo-1611245667409-51dae8f1b4d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"07"
  },
  {
    src: "https://images.unsplash.com/photo-1588693951525-7b0be0fc710f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"08"
  },
  {
    src: "https://images.unsplash.com/photo-1567928513938-cd0e82a33ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"08a"
  },
  {
    src: "https://images.unsplash.com/photo-1630307186909-ba2785e4b5c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"09"
  },
  {
    src: "https://images.unsplash.com/photo-1533575349875-5f372f88e25b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"10"
  }
];
let images2 = [
  {
    src: "https://images.unsplash.com/photo-1590845947676-fa2576f401b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"11"
  },
  {
    src: "https://images.unsplash.com/photo-1557853375-d424b71231af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU4fHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"12"
  },
  {
    src: "https://images.unsplash.com/photo-1614179818750-1b4dfe94389d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYzfHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"13"
  },
  {
    src: "https://images.unsplash.com/photo-1595790486754-479389ca5140?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE2fHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"14"
  },
  {
    src: "https://images.unsplash.com/photo-1608894940299-3197edf48de3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"15"
  },
  {
    src: "https://images.unsplash.com/photo-1617701461532-65184e25ec89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM1fHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"16"
  },
  {
    src: "https://images.unsplash.com/photo-1610210866660-79584c2addc4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjYzfHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"17"
  },
  {
    src: "https://images.unsplash.com/photo-1565935192924-21a9ddca26eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjgxfHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"18"
  },
  {
    src: "https://images.unsplash.com/photo-1587293823627-3c9adab68eaf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk5fHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"19"
  },
  {
    src: "https://images.unsplash.com/photo-1599855129460-58c62b60e3df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAxfHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"20"
  },

  {
    src: "https://images.unsplash.com/photo-1573151476631-7f68ff70398a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA1fHxoZWFkcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser",
    id:"21"
  }

]

const PageScroll = () => {
  const userUUID  = localStorage.getItem('UserUUID')
  console.log('userUUID', userUUID)
  let imagesData = useReadIdentityApi({
    userUUID
  })
  // const dispatch = useDispatch()
  // const leftCardIndex = useSelector((state) => state.feedReducer.leftCardIndex)
  // const cardIndex = leftCardIndex > -1 ? leftCardIndex : 0
  // console.log('PageScroll general leftCardIndex, cardIndex', leftCardIndex, cardIndex)
  const [currentPage, setCurrentPage] = useState(2)
  // const [currentPage, setCurrentPage] = useState(2)
  // const [didMount, setDidMount] = useState(true)
  
  // dont use imagesData
  // let imagesState = images;
  const [imagesState, setImagesState] = useState(images)

  useEffect(() => {
    // console.log('PageScroll.useEffect currentPage', currentPage)
    // setDidMount(true)
    // const lastCardIndex = localStorage.getItem('lastCardIndex') | 0;
    // console.log('PageScroll.useEffect==>lastCardIndex',lastCardIndex,currentPage)
    // if(lastCardIndex >=0){
    // setCurrentPage(lastCardIndex)
    // }
    // setImagesState(imagesData)
  }, [])

  const handlePageChange = async (number) => {
    console.log('PageScroll.handlePageChange', currentPage)
    // const lastCardIndex = localStorage.getItem('lastCardIndex');
    // console.log('PageScroll.handlePageChange',currentPage,lastCardIndex,number)
    // if(currentPage !== null && lastCardIndex >=0){
    //   console.log('PageScroll.handlePageChange localStorage.setItem',number)
    //   localStorage.setItem('lastCardIndex', number);
    // }
    // if(localStorage.getItem('backToFeed')==='yes') {
    //   console.log('PageScroll.handlePageChange true', localStorage.getItem('lastCardIndex'))
    //   localStorage.setItem('backToFeed','')
    //   setCurrentPage(localStorage.getItem('lastCardIndex')|0)
    // } else{
    //   console.log('PageScroll.handlePageChange false', number)
    //   localStorage.setItem('lastCardIndex', number);
    // dispatch(setFeedCurrCardIndex(number))
    setCurrentPage(number)
    if(number === images.length-1 && imagesState.length === images.length){
      console.log('lazy loaded number, imagesState.length, images2.length', number, imagesState.length, images2.length, (imagesState.concat(images2)).length)
      setImagesState(imagesState.concat(images2))
      imagesData = await identityDataPost({
        userUUID
      })
    }
    //}
  };

  // if (!imagesData.done) {
  //   return (
  //     <>Loading</>
  //   )
  // }

  // if (imagesData.done && !imagesData) {
  //   return <>No Data</>
  // }

  return (
    <div className="demo-page-contain">
      <ReactPageScroller
        pageOnChange={handlePageChange}
        containerWidth={window.innerWidth * 0.98}
        containerHeight={window.innerHeight * 0.98}
        animationTimer={100}
        customPageNumber={currentPage}
      >
        {
          imagesState.map(img => <Image key={img.src} src={img.src} title={img.title} />)
        }
      </ReactPageScroller>
    </div>
  );
}

export default PageScroll
