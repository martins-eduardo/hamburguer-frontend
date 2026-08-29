import { Calendar, Clock, User } from 'lucide-react'

interface orderProps {
  id: number
  status: string
  name: string
  date: string
  start: string
  end?: string
  value: number
}

export function Order({
  id,
  status,
  name,
  date,
  start,
  end,
  value,
}: orderProps) {
  return (
    <div className="flex flex-col bg-[#F2DAAC] p-2 rounded-sm gap-2">
      <div className="flex justify-between font-semibold">
        <span>#{id}</span>
        <select name="" id="" className="cursor-pointer">
          <option value="" defaultChecked disabled>
            {status}
          </option>
          <option value="">{status}</option>
          <option value="">{status}</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <User size={16} strokeWidth={3} />
          <span>{name}</span>
        </div>
        <div className="flex gap-2 items-center">
          <Calendar size={16} strokeWidth={3} />
          <span>{date}</span>
        </div>
        <div className="flex justify-between gap-2 ">
          <div className="flex gap-2 items-center">
            <Clock size={16} strokeWidth={3} />
            <span>{start}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Clock size={16} strokeWidth={3} />
            <span>{end ? end : 'Não entregue'}</span>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-black" />
      <div className="flex justify-end">
        <span className="font-semibold text-xl">R${value}</span>
      </div>
    </div>
  )
}
