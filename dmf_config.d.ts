declare module "dmf_config/services/logger-service" {
    const _default: {
        log: {
            (...data: any[]): void;
            (message?: any, ...optionalParams: any[]): void;
        };
    };
    export default _default;
}
declare module "dmf_config/features/todos/model/Todo" {
    export type Todo = {
        id: string;
        title: string;
    };
}
declare module "dmf_config/services/todos-api-client" {
    import { Todo } from "dmf_config/features/todos/model/Todo";
    export function loadSnapshot(): Promise<Todo[]>;
    export function saveSnapshot(data: Todo[]): Promise<undefined>;
}
declare module "dmf_config/services" {
    import * as logger from "dmf_config/services/logger-service";
    import * as todos from "dmf_config/services/todos-api-client";
    const AppServices: {
        logger: typeof logger;
        api: {
            todos: typeof todos;
        };
    };
    const fnc: () => {
        logger: typeof logger;
        api: {
            todos: typeof todos;
        };
    };
    type AppService = ReturnType<typeof fnc>;
    type AppRootService = {
        config: AppService;
    };
    export default AppServices;
    export { AppRootService, AppService };
}
declare module "dmf_config/features/todos/actions" {
    import { Todo } from "dmf_config/features/todos/model/Todo";
    export const addTodo: (title: string) => import("typesafe-actions").PayloadAction<"CONFIG_ADD_TODO", Todo>;
    export const removeTodo: import("typesafe-actions").PayloadActionCreator<"CONFIG_REMOVE_TODO", string>;
    export const loadTodosAsync: {
        request: import("typesafe-actions").PayloadMetaActionCreator<"CONFIG_LOAD_TODOS_REQUEST", unknown, unknown>;
        success: import("typesafe-actions").PayloadActionCreator<"CONFIG_LOAD_TODOS_SUCCESS", Todo[]>;
        failure: import("typesafe-actions").PayloadActionCreator<"CONFIG_LOAD_TODOS_FAILURE", string>;
    };
    export const saveTodosAsync: {
        request: import("typesafe-actions").PayloadMetaActionCreator<"CONFIG_SAVE_TODOS_REQUEST", unknown, unknown>;
        success: import("typesafe-actions").PayloadMetaActionCreator<"CONFIG_SAVE_TODOS_SUCCESS", unknown, unknown>;
        failure: import("typesafe-actions").PayloadActionCreator<"CONFIG_SAVE_TODOS_FAILURE", string>;
    };
    export const doNothing: import("typesafe-actions").EmptyActionCreator<"DO_NO_THING">;
}
declare module "dmf_config/store/action" {
    import * as todosActions from "dmf_config/features/todos/actions";
    import { ActionType } from 'typesafe-actions';
    export const configAction: {
        router: {
            push: typeof import("connected-react-router").push;
            replace: typeof import("connected-react-router").replace;
            go: typeof import("connected-react-router").go;
            goBack: typeof import("connected-react-router").goBack;
            goForward: typeof import("connected-react-router").goForward;
        };
        config: {
            todo: typeof todosActions;
        };
    };
    export type AppAction = ActionType<typeof configAction>;
}
declare module "dmf_config/features/todos/reducer" {
    import { Todo } from "dmf_config/features/todos/model/Todo";
    export const isConfigLoading: any;
    export const configTodos: any;
    const todosReducer: import("redux").Reducer<import("redux").CombinedState<{
        isConfigLoading: boolean;
        configTodos: Todo[];
    }>, import("redux").AnyAction>;
    export default todosReducer;
    export type TodosState = ReturnType<typeof todosReducer>;
}
declare module "dmf_config/features/todos/selectors" {
    import { TodosState } from "dmf_config/features/todos/reducer";
    export const getTodos: (state: TodosState) => import("dmf_config/features/todos/model/Todo").Todo[];
}
declare module "dmf_config/store/reducer" {
    import { StateType } from 'typesafe-actions';
    import { RouterState } from 'connected-react-router';
    const configReducer: import("redux").Reducer<import("redux").CombinedState<{
        todoModule: import("redux").CombinedState<{
            isConfigLoading: boolean;
            configTodos: import("dmf_config/features/todos/model/Todo").Todo[];
        }>;
    }>, import("redux").AnyAction>;
    export type ConfigState = StateType<typeof configReducer>;
    export type AppState = {
        [key: string]: any;
        router: RouterState<any>;
        config: ConfigState;
    };
    export { configReducer };
}
declare module "dmf_config/features/todos/epics" {
    import { Epic } from 'redux-observable';
    import { AppState } from "dmf_config/store/reducer";
    import { AppAction } from "dmf_config/store/action";
    import { AppRootService } from "dmf_config/services";
    export const configLoadTodosEpic: Epic<AppAction, AppAction, AppState, AppRootService>;
    export const configSaveTodosEpic: Epic<AppAction, AppAction, AppState, AppRootService>;
}
declare module "dmf_config/store/other-epics" {
    import { Epic } from 'redux-observable';
    export const configUserSaveTodosEpic: Epic<any, any, any, any>;
}
declare module "dmf_config/store/epic" {
    const configEpic: import("redux-observable").Epic<import("connected-react-router").CallHistoryMethodAction<[any]> | import("connected-react-router").CallHistoryMethodAction<[number]> | import("connected-react-router").CallHistoryMethodAction<[]> | import("typesafe-actions").PayloadAction<"CONFIG_ADD_TODO", import("dmf_config/features/todos/model/Todo").Todo> | import("typesafe-actions").PayloadAction<"CONFIG_REMOVE_TODO", string> | import("typesafe-actions").PayloadMetaAction<"CONFIG_LOAD_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadAction<"CONFIG_LOAD_TODOS_SUCCESS", import("dmf_config/features/todos/model/Todo").Todo[]> | import("typesafe-actions").PayloadAction<"CONFIG_LOAD_TODOS_FAILURE", string> | import("typesafe-actions").PayloadMetaAction<"CONFIG_SAVE_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadMetaAction<"CONFIG_SAVE_TODOS_SUCCESS", unknown, unknown> | import("typesafe-actions").PayloadAction<"CONFIG_SAVE_TODOS_FAILURE", string> | import("typesafe-actions").EmptyAction<"DO_NO_THING">, import("connected-react-router").CallHistoryMethodAction<[any]> | import("connected-react-router").CallHistoryMethodAction<[number]> | import("connected-react-router").CallHistoryMethodAction<[]> | import("typesafe-actions").PayloadAction<"CONFIG_ADD_TODO", import("dmf_config/features/todos/model/Todo").Todo> | import("typesafe-actions").PayloadAction<"CONFIG_REMOVE_TODO", string> | import("typesafe-actions").PayloadMetaAction<"CONFIG_LOAD_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadAction<"CONFIG_LOAD_TODOS_SUCCESS", import("dmf_config/features/todos/model/Todo").Todo[]> | import("typesafe-actions").PayloadAction<"CONFIG_LOAD_TODOS_FAILURE", string> | import("typesafe-actions").PayloadMetaAction<"CONFIG_SAVE_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadMetaAction<"CONFIG_SAVE_TODOS_SUCCESS", unknown, unknown> | import("typesafe-actions").PayloadAction<"CONFIG_SAVE_TODOS_FAILURE", string> | import("typesafe-actions").EmptyAction<"DO_NO_THING">, import("dmf_config/store/reducer").AppState, import("services").AppRootService>[];
    export { configEpic };
}
declare module "dmf_config/store" {
    import * as actions from "dmf_config/store/action";
    import * as epic from "dmf_config/store/epic";
    import * as reducer from "dmf_config/store/reducer";
    export { actions, epic, reducer };
}
