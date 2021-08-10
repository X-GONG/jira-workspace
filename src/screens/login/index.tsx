import React, { FormEvent } from "react";

// interface Base {
//    id: number
// }
// interface Person extends Base { // Person去继承Base对数据类型的定义
//    name: string
// }
// const test: Person = { id: 1, name: '123'}
interface Submitparam {
   username: string,
   password: string
}
const apiUrl = 'http://localhost:3001'
export const LoginScreen = () => {
   const login = ( param: Submitparam ) => {
      fetch(`${apiUrl}/login`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(param)
      }).then(
         async response => {
            if (response.ok) {
               
            }
      })
   }
   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault() // 阻止默认点击事件执行
      const username = (event.currentTarget.elements[0] as HTMLInputElement).value
      // event.currentTarget.elements浏览器自带的查询input包含的信息 event.currentTarget.elements[0]就是username的信息
      const password = (event.currentTarget.elements[1] as HTMLInputElement).value
      login({username, password})
   }

   return <form onSubmit={handleSubmit}>
      <div>
         <label htmlFor="username">用户名</label>
         <input type="text" id={'username'} />
      </div>
      <div>
         <label htmlFor="password"></label>
         <input type="text" id={'password'} />
      </div>
      <button type={"submit"}>登录</button>
   </form>
}