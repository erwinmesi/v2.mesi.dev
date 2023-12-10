import cn from 'classnames'

function SymbolCircle({ svgClass }: any) {
  return (
    <svg
      className={cn('aspect-square rounded-full opacity-30 absolute', svgClass)}
    />
  )
}

export default SymbolCircle
