import { atom } from 'recoil'
import { menu } from '../models/menu'
import { LoadGrandMenu } from '../api/menu'

export const grandMenuState = atom<menu[]>({
  key: 'grandMenu',
  default: LoadGrandMenu(),
})
