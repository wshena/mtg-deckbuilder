import { PiStackMinusFill } from "react-icons/pi";
import { TbCardsFilled } from "react-icons/tb";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

export const MenuIcon = ({size, style}:{size:number, style:string}) => {
  return <IoMenu size={size} className={style} />
}

export const SearchIcon = ({size, style}:{size:number, style:string}) => {
  return <FaMagnifyingGlass size={size} className={style} />
}

export const TriangleDownIcon = ({size, style}:{size:number, style:string}) => {
  return <VscTriangleDown size={size} className={style} />
}

export const TriangleUpIcon = ({size, style}:{size:number, style:string}) => {
  return <VscTriangleUp size={size} className={style} />
}

export const StackIcon = ({size, style}:{size:number, style:string}) => {
  return <PiStackMinusFill size={size} className={style} />
}

export const CardIcon = ({size, style}:{size:number, style:string}) => {
  return <TbCardsFilled size={size} className={style} />
}