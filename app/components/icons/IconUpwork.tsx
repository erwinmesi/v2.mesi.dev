import React from 'react'

interface IconLinkedInProps {
  className?: string
  title?: string
}

const IconUpwork: React.FC<IconLinkedInProps> = ({ className, title }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 32 32"
    >
      {title && <title>{title}</title>}
      <path
        fill="currentColor"
        d="M24.748 17.544c-1.469 0-2.847-0.623-4.099-1.636l0.304-1.435 0.011-0.056c0.276-1.524 1.132-4.080 3.785-4.080 1.989 0 3.604 1.616 3.604 3.604-0.001 1.985-1.616 3.603-3.605 3.603zM24.748 6.691c-3.385 0-6.013 2.199-7.080 5.821-1.627-2.445-2.864-5.381-3.583-7.856h-3.648v9.483c-0.003 1.875-1.521 3.395-3.396 3.397-1.873-0.003-3.391-1.524-3.393-3.397v-9.483h-3.648v9.483c0 3.885 3.16 7.071 7.041 7.071 3.884 0 7.044-3.185 7.044-7.071v-1.587c0.705 1.476 1.576 2.972 2.632 4.295l-2.231 10.497h3.729l1.617-7.613c1.417 0.905 3.047 1.479 4.915 1.479 4 0 7.252-3.269 7.252-7.267 0-4-3.252-7.252-7.252-7.252z"
      ></path>
    </svg>
  )
}

export default IconUpwork
