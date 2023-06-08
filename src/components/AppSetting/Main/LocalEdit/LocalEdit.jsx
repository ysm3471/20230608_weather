import React from 'react'
import Title from '../UI/Title'
import LocalList from './LocalList'
import LocalAdd from './LocalAdd'

export default function LocalEdit() {
  return (
    <div>
      <Title title={"지역관리"}/>
      <LocalList/>
      <LocalList/>
      <LocalAdd/>
    </div>
  )
}
