import type { MenuItem } from "../types"

type  MenuItemProps = {
    item: MenuItem
}

export default function MenuItem  ({item}:MenuItemProps){

    const {id,name,price} = item
    
  return (
    <div>{id}{name}{price}</div>
  )
}
