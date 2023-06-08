import React from 'react';
import classes from './LocalList.module.css'

export default function LocalList() {
  return (
    <div className={classes.LocalList}>
      <div className={classes.local}>
        <p>서울특별시 강남구</p>
        <div className="icon">
          <img src="img/Star-checked.png" alt="tar-checked" />
        </div>
      </div>
      <div className={classes.icons}>
        <div className="icon">
          <img src="img/edit_b.png" alt="edit_b" />
        </div>
        <div className="icon">
          <img src="img/trash.png" alt="trash" />
        </div>
      </div>
    </div>
  )
}
