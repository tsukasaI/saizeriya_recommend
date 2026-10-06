import saizeriyaMenu from '../assets/menu.yaml'
import { menu } from '../domain/menu'

export const LoadGrandMenu = () => {
  return <menu[]>saizeriyaMenu.grand
}

export const grandMenu = LoadGrandMenu()
