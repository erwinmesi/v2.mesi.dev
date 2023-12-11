import cn from 'classnames'
import React from 'react'

type FloatingStatsProps = {
  data: string
  caption: string,
  className: string,
}

function FloatingStats({ className, data, caption }: FloatingStatsProps) {
  return (
    <div
      className={cn(
        className,
        'bg-white grid place-content-center rounded-full border-2 border-primary-300 text-center'
      )}
    >
      <div className="text-lg font-bold text-primary">{data}</div>
      <small className="text-xs text-typo">{caption}</small>
    </div>
  )
}

export default FloatingStats
