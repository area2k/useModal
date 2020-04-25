import { Context, FunctionComponent } from 'react'

export type ModalType<T> = FunctionComponent<T>

type AddModal = <T extends object>(component: ModalType<T>, props: T) => void
type RemoveModal = () => void

export type ShowModal<T> = (props?: T) => void
export type HideModal = () => void

export type ContextShape = {
  showModal: AddModal
  hideModal: RemoveModal
}

export interface ProviderProps {
  rootComponent?: Element
}

export const ModalContext: Context<ContextShape>
export const ModalProvider: FunctionComponent<ProviderProps>

export default function useModal<T extends object>(modal: ModalType<T>, inputs?: any[]): [ShowModal<T>, HideModal]
