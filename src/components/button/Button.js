import React from 'react'
import styles from './Button.module.css'
import {MdMessage} from 'react-icons/md'

function Button() {
  return (
    <div>
        <button className={styles.primary_btn}>
        <MdMessage 
        fontSize="24px"/>
            VIA SUPPORT CHAT
        </button>
    </div>
  )
}

export default Button