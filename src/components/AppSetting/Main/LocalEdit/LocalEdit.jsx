import React, { useContext, useEffect, useState } from 'react'
import Title from '../UI/Title'
import LocalAdd from './LocalAdd'
import classes from './LocalEdit.module.css'
import { WeatherContext } from '../../../Store/WeatherProvider'

export default function LocalEdit({ mapToggleBtn, mapToggle,userEditing,editing }) {
  const { userAddress } = useContext(WeatherContext);
  const [editingId, setEditingId] = useState(null);

  const [addressList, setAddressList] = useState([
    {
      id: 0,
      address: "서울특별시, 중구"
    }
  ])

  useEffect(() => {
    const today = new Date();
    const id = today.getTime();
    const check = addressList.find((aa) => userAddress === aa.address )
    if (!(check) && userAddress) {
      if (editing) {
        const search = addressList.find((aa) => aa.id === editingId);
        let copy = [...addressList];    // 아마 참조복사가 되는듯. 생각한 결과는 아니지만 문제는 없음
        copy.forEach((aa) => {
          if(aa.id === search.id) {
            aa.address = userAddress
          }
        })
        setAddressList(copy);
        userEditing(false);
        }
      else {
        const newList = {
          id,
          address: userAddress
        }
        let copy = [...addressList];
        copy = copy.concat(newList);
        setAddressList(copy);
      }
    }
  }, [userAddress])

  const localList = (
    <div>
      {addressList.map((item, index) => 
      {
      return (
        <div className={classes.LocalList} key={index}>
          <div className={classes.local}>
            <p>{item.address}</p>
            <div className="icon">
              <img src="img/Star-checked.png" alt="star-checked" />
            </div>
          </div>
          <div className={classes.icons}>
            <div className={`icon ${classes.edit}`} onClick={() => { editBtn(item.id) }}>
              <img src="img/edit_b.png" alt="edit_b" />
            </div>
            <div className={`icon ${classes.trash}`} onClick={() => { removeBtn(item.id) }}>
              <img src="img/trash.png" alt="trash" />
            </div>
          </div>
        </div>
      )})}
    </div>
  )
  function editBtn(key) {
    mapToggleBtn();
    userEditing(true);
    setEditingId(key);
  }
  function removeBtn(key) {
    setAddressList(addressList.filter((aa) => aa.id !== key))
  }
  return (
    <div>
      <Title title={"지역관리"} />
      {localList}
      {(addressList.length < 3) && <LocalAdd mapToggleBtn={mapToggleBtn} />}
    </div>
  )
}
