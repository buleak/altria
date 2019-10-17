import Vue from 'vue'
import Axios from 'axios'

export const reqGet = (url, data = null) => {
  console.log(`${url} ----- `, data)
  return new Promise((resolve, reject) => {
    Axios.get(url, { params: data })
    .then(res => { 
      console.log(`${url} ===== `, res.data)
      resolve(res)
    }).catch(err => { 
      console.error(`${url} ~~~~~ `, err);
      reject(err) 
    })
  })
}

export const reqPost = (url, data) => {
  console.log(`${url} ----- `, data)
  return new Promise((resolve, reject) => {
    Axios.post(url, { ...data })
    .then(res => { 
      console.log(`${url} ===== `, res.data)
      resolve(res)
    }).catch(err => { 
      console.error(`${url} ~~~~~ `, err);
      reject() 
    })
  })
}
