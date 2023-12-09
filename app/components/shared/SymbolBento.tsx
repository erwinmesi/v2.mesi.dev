import dotsBox from '@/app/assets/images/dots_box.svg'

function SymbolBento({ picClass, imgClass }: any) {
  return (
    <picture className={picClass}>
      <img className={imgClass} src={dotsBox.src} alt="symbol" />
    </picture>
  )
}

export default SymbolBento
