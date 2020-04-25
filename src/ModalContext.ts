import React from 'react'

import { ContextShape } from '../types'

export default React.createContext<ContextShape>({
  showModal: () => undefined,
  hideModal: () => undefined
})
