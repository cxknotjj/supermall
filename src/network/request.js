import axios from "axios";
export function request(config) {
  const intance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000
  });
  // 一、请求拦截
  // intance.interceptors.request.use(config => {

  //   return config
  // }, err => {
  //   console.log(err);
  // })
  
  // 二、响应拦截
  intance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })
  return intance(config)
}