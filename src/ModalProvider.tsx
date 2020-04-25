import React, { useCallback, useMemo, useState } from 'react'

import ModalContext from './ModalContext'
import ModalRoot from './ModalRoot'

import { ModalType, ProviderProps } from '../types'

type ModalShape<T = object> = {
  component?: ModalType<T>,
  props?: T
}

const ModalProvider: React.FC<ProviderProps> = ({ children, rootComponent }) => {
  const [modal, setModal] = useState<ModalShape>({})

  const showModal = useCallback((component: ModalType<object>, props: object) => (
    setModal({ component, props })
  ), [])

  const hideModal = useCallback(() => (
    setModal({})
  ), [])

  const value = useMemo(() => ({ showModal, hideModal }), [])

  return (
    <ModalContext.Provider value={value}>
      <>
        {children}
        <ModalRoot
          modalComponent={modal.component}
          modalProps={modal.props}
          rootComponent={rootComponent}
        />
      </>
    </ModalContext.Provider>
  )
}

export default ModalProvider
