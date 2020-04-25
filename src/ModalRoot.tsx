import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { ModalType } from '../types'

interface Props<T = object> {
  modalComponent?: ModalType<T>,
  modalProps?: T,
  rootComponent?: Element
}

const ModalRoot = ({ modalComponent: ModalComponent, modalProps, rootComponent }: Props) => {
  const [root, setRoot] = useState<Element | undefined>()

  useEffect(() => setRoot(rootComponent || document.body), [])

  if (root && ModalComponent) {
    return (
      ReactDOM.createPortal(
        <ModalComponent {...modalProps} />,
        root
      )
    )
  }

  return null
}

export default ModalRoot
