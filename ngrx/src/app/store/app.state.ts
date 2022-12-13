import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppState {
    counter: number;
}

export const appInitalState: IAppState = {
    counter: 0
}

export const incrementaContador = createAction('[App] Aumenta Contador');
export const decrementaContador = createAction('[App] Reduz Contador');

export const appReducer = createReducer(
    appInitalState,
    on(incrementaContador, (state) => {
        state = {
            ...state,
            counter: state.counter + 1
        }
        return state;
    }),
    on(decrementaContador, (state) => {
        state = {
            ...state,
            counter: state.counter - 1
        }
        return state;
    })
)

