import { PiStackMinusFill } from "react-icons/pi";
import { TbCardsFilled } from "react-icons/tb";
import { VscTriangleDown, VscTriangleUp, VscTriangleRight } from "react-icons/vsc";
import { FaMagnifyingGlass, FaBox, FaBoltLightning } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { MdCancel } from "react-icons/md";

export const PeopleIcon = ({size, style}:{size:number, style:string}) => {
  return <IoIosPeople size={size} className={style} />
}

export const LightningIcon = ({size, style}:{size:number, style:string}) => {
  return <FaBoltLightning size={size} className={style} />
}

export const BoxIcon = ({size, style}:{size:number, style:string}) => {
  return <FaBox size={size} className={style} />
}

export const CancelIcon = ({size, style}:{size:number, style:string}) => {
  return <MdCancel size={size} className={style} />
}

export const MenuIcon = ({size, style}:{size:number, style:string}) => {
  return <IoMenu size={size} className={style} />
}

export const SearchIcon = ({size, style}:{size:number, style:string}) => {
  return <FaMagnifyingGlass size={size} className={style} />
}

export const TriangleRightIcon = ({size, style}:{size:number, style:string}) => {
  return <VscTriangleRight size={size} className={style} />
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