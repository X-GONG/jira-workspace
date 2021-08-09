import React, { useEffect } from "react"
import { SearchPanel } from './search-panel'
import { List } from './list'
import { useState } from "react"
import { cleanObject, useDebounce } from "utils"
import * as qs from "qs"

// 'http://localhost:3001'
const apiUrl = 'http://localhost:3001'

export const ProjectListScreen = () => {
   const [param, setParam] = useState({
      name: '',
      personId: ''
   })
   const debouncedParam = useDebounce(param, 2000)
   const [list, setList] = useState([])
   const [users, setUsers] = useState([])
   // react自带hook useEffect、useState
   useEffect(() => {
      // console.log(apiUrl) name=${param.name}&personId=${param.personId}
      fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
         if (response.ok) {
            setList(await response.json())
         }
      })
   }, [debouncedParam])

   useEffect(() => {
      fetch(`${apiUrl}/users`).then(async response => {
         if (response.ok) {
            setUsers(await response.json())
         }
      })
   },[])

   return <div>
      <SearchPanel users={users} param={param} setParam={setParam}/>
      <List users={users} list={list}/>
   </div>
}