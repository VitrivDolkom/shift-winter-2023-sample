import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '@redux/store'

export const useAppDispatch: () => ThunkDispatch<RootState, any, AnyAction> = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
