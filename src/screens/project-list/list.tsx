// import React from "react"
import {User} from "screens/project-list/search-panel"
interface Project {
   id: string;
   name: string;
   personId: string;
   pin: string;
   organization: string;
}
interface listProps {
   list: Project[],
   users: User[]
}
export const List = ({ list, users }: listProps) => {
   return <table>
      <thead>
         <tr>
            <th>名称</th>
            <th>负责人</th>
         </tr>
      </thead>
      <tbody>
         {
            list.map(item => <tr key={item.id}>
               <td>{item.name}</td>
               <td>{ users.find(el => el.id === item.personId)?.name || '未知'}</td>
            </tr>)
         }
      </tbody>
   </table>
}