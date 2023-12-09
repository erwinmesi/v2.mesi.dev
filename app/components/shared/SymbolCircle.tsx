import cn from 'classnames'

function SymbolBento({ svgClass }: any) {
  return (
    <svg
      className={cn('aspect-square rounded-full opacity-30 absolute', svgClass)}
    ></svg>
  )
}

export default SymbolBento
