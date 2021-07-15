import {request} from "./request.js";
// 进一步封装请求。
export function getHomeMultidata() {
  return request(
    {
      url: '/home/multidata'
    }
  )
}