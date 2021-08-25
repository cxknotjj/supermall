import {request} from "./request";
export function getInfo(maitKey) {
  return request({
    url:'/category',
    params: {
      maitKey,
      type:'new'
    }
  })
}

export function getListInfo(acm) {
  return request({
    url:'/category',
  })
}