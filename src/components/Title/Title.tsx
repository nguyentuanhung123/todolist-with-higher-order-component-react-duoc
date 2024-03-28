import React from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
}

const Title = (props: TitleProps) => {
  console.log(props.address);
  return (
    <h1 className={styles.title}>To do list typescript</h1>
  )
}

const equal = (prevProp: TitleProps, nextProp: TitleProps) => {
  // Giống nhau -> không re-render 
  // if(prevProp.address.street === nextProp.address.street){
  //   return true;
  // }
  // return false;
  return prevProp.address.street === nextProp.address.street
}

export default React.memo(Title, equal);
