import { configureStore } from '@reduxjs/toolkit'
import FiltroReducer from './reducers/Filtro'
import atividadesReducer from './reducers/atividades'

const store = configureStore({
  reducer: {
    atividade: atividadesReducer,
    filtro: FiltroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
