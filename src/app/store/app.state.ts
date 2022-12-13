import { Todos } from './../todos';
import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IAppState {
    counter: number;
    todos: Todos[];
}

export const appInitalState: IAppState = {
    counter: 0,
    todos: []
}

export const incrementaContador = createAction('[App] Aumenta Contador');

export const decrementaContador = createAction('[App] Reduz Contador');

export const setTodos = createAction('[App] Define todos', props<{payload: Todos[]}>());

export const loadTodos = createAction('[App] Carrega todos');

export const sucessoCarregaTodos = createAction('[App] [Sucesso] Carrega todos');

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
    }),
    on(setTodos, (state, {payload}) => {
        state = {
            ...state,
            todos: payload
        }
        return state;
    })
)

