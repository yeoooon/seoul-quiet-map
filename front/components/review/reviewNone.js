import React from 'react';

// styled
import ReviewNoneContent from './reviewNoneStyles';
import {ReviewBtn} from '../../styles/btnStyles';

// react-icon
import { FaSurprise } from "react-icons/fa";

const ReviewNone = ({setIsWriting}) => {
  return (
    <ReviewNoneContent>
      <div className='noneCon'>
        <FaSurprise/>
        <p>등록된 소음 리뷰가 없습니다</p>
      </div>
      <ReviewBtn>
        <button onClick={()=>{setIsWriting(true)}}>소음 리뷰 쓰러가기</button>
      </ReviewBtn>
    </ReviewNoneContent>
  );
};

export default ReviewNone;