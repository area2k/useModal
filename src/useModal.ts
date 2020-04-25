import { useCallback, useEffect, useMemo, useState, useContext } from 'react'

import { ModalType } from '../types'

import ModalContext from './ModalContext'

const useModal = <T extends object>(component: ModalType<T>, inputs: any[] = []) => {
  const context = useContext(ModalContext)

  const [isOpen, setIsOpen] = useState(false)
  const [props, setProps] = useState<T>({} as T)

  const modal = useMemo(() => component, inputs)

  const hideModal = useCallback(() => setIsOpen(false), []);
  const showModal = useCallback((props?: T) => {
    setIsOpen(true)
    setProps(props || {} as T)
  }, []);

  useEffect(() => {
    if (isOpen) {
      context.showModal(modal, props)
    } else {
      context.hideModal()
    }

    return () => context.hideModal()
  }, [modal, isOpen]);

  return [showModal, hideModal]
}

export default useModal
