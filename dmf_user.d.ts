/// <reference types="react" />
declare module "dmf_user/login/Login" {
    const Login: () => JSX.Element;
    export default Login;
}
declare module "dmf_user/login/LoginButton" {
    const LoginButton: () => JSX.Element;
    export default LoginButton;
}
declare module "dmf_user/password/ChangePassword" {
    const ChangePassword: () => JSX.Element;
    export default ChangePassword;
}
declare module "dmf_user/password/ResetPassword" {
    const ResetPassword: () => JSX.Element;
    export default ResetPassword;
}
declare module "dmf_user/signup/SignUp" {
    const SignUp: () => JSX.Element;
    export default SignUp;
}
declare module "dmf_user/UpdateUser" {
    const UpdateUser: () => JSX.Element;
    export default UpdateUser;
}
declare module "dmf_user/services/logger-service" {
    const _default: {
        log: {
            (...data: any[]): void;
            (message?: any, ...optionalParams: any[]): void;
        };
    };
    export default _default;
}
declare module "dmf_user/features/todos/model/Todo" {
    export type Todo = {
        id: string;
        title: string;
    };
}
declare module "dmf_user/services/todos-api-client" {
    import { Todo } from "dmf_user/features/todos/model/Todo";
    export function loadSnapshot(): Promise<Todo[]>;
    export function saveSnapshot(data: Todo[]): Promise<undefined>;
}
declare module "dmf_user/features/auth/model/Login" {
    export interface LoginData {
        email: string;
        password: string;
    }
    export interface LoginStatus {
        id: number;
        token: string;
        expiresIn: number | string;
    }
}
declare module "dmf_user/features/auth/model/index" {
    export * from "dmf_user/features/auth/model/Login";
}
declare module "dmf_user/features/auth/services/auth-service" {
    import { LoginData, LoginStatus } from "dmf_user/features/auth/model/index";
    export function login(loginData: LoginData): Promise<LoginStatus>;
}
declare module "dmf_user/features/auth/services/index" {
    export * from "dmf_user/features/auth/services/auth-service";
}
declare module "dmf_user/services" {
    import * as logger from "dmf_user/services/logger-service";
    import * as todos from "dmf_user/services/todos-api-client";
    import * as auth from "dmf_user/features/auth/services/index";
    const AppServices: {
        logger: typeof logger;
        api: {
            todos: typeof todos;
            auth: typeof auth;
        };
    };
    const fnc: () => {
        logger: typeof logger;
        api: {
            todos: typeof todos;
            auth: typeof auth;
        };
    };
    type AppService = ReturnType<typeof fnc>;
    type AppRootService = {
        user: AppService;
    };
    export default AppServices;
    export { AppRootService, AppService };
}
declare module "dmf_user/features/todos/actions" {
    import { Todo } from "dmf_user/features/todos/model/Todo";
    export const addTodo: (title: string) => import("typesafe-actions").PayloadAction<"ADD_TODO", Todo>;
    export const removeTodo: import("typesafe-actions").PayloadActionCreator<"REMOVE_TODO", string>;
    export const loadTodosAsync: {
        request: import("typesafe-actions").PayloadMetaActionCreator<"LOAD_TODOS_REQUEST", unknown, unknown>;
        success: import("typesafe-actions").PayloadActionCreator<"LOAD_TODOS_SUCCESS", Todo[]>;
        failure: import("typesafe-actions").PayloadActionCreator<"LOAD_TODOS_FAILURE", string>;
    };
    export const saveTodosAsync: {
        request: import("typesafe-actions").PayloadMetaActionCreator<"SAVE_TODOS_REQUEST", unknown, unknown>;
        success: import("typesafe-actions").PayloadMetaActionCreator<"SAVE_TODOS_SUCCESS", unknown, unknown>;
        failure: import("typesafe-actions").PayloadActionCreator<"SAVE_TODOS_FAILURE", string>;
    };
}
declare module "dmf_user/features/auth/store/actions" {
    import { LoginData, LoginStatus } from "dmf_user/features/auth/model/index";
    export const userLoginAsync: {
        request: import("typesafe-actions").PayloadActionCreator<"USER_LOGIN_REQUEST", LoginData>;
        success: import("typesafe-actions").PayloadActionCreator<"USER_LOGIN_SUCCESS", LoginStatus>;
        failure: import("typesafe-actions").PayloadActionCreator<"USER_LOGIN_FAILURE", string>;
    };
}
declare module "dmf_user/store/action" {
    import * as todosActions from "dmf_user/features/todos/actions";
    import * as authActions from "dmf_user/features/auth/store/actions";
    import { ActionType } from 'typesafe-actions';
    export const userAction: {
        router: {
            push: typeof import("connected-react-router").push;
            replace: typeof import("connected-react-router").replace;
            go: typeof import("connected-react-router").go;
            goBack: typeof import("connected-react-router").goBack;
            goForward: typeof import("connected-react-router").goForward;
        };
        user: {
            todo: typeof todosActions;
            auth: typeof authActions;
        };
    };
    export type AppAction = ActionType<typeof userAction>;
}
declare module "dmf_user/features/todos/reducer" {
    import { Todo } from "dmf_user/features/todos/model/Todo";
    export const isLoadingTodos: any;
    export const todos: any;
    const todosReducer: import("redux").Reducer<import("redux").CombinedState<{
        isLoadingTodos: boolean;
        todos: Todo[];
    }>, import("redux").AnyAction>;
    export default todosReducer;
    export type TodosState = ReturnType<typeof todosReducer>;
}
declare module "dmf_user/features/todos/selectors" {
    import { TodosState } from "dmf_user/features/todos/reducer";
    export const getTodos: (state: TodosState) => import("dmf_user/features/todos/model/Todo").Todo[];
}
declare module "dmf_user/features/auth/store/reducer" {
    export const isLogin: any;
    export interface AuthState {
        isLoading: boolean;
    }
    export interface AppAuthState {
        user: {
            auth: AuthState;
        };
    }
    const authReducer: import("redux").Reducer<import("redux").CombinedState<AuthState>, import("redux").AnyAction>;
    export default authReducer;
    export type TodosState = ReturnType<typeof authReducer>;
}
declare module "dmf_user/store/reducer" {
    import { StateType } from 'typesafe-actions';
    import { RouterState } from 'connected-react-router';
    export const userReducer: import("redux").Reducer<import("redux").CombinedState<{
        todo: import("redux").CombinedState<{
            isLoadingTodos: boolean;
            todos: import("dmf_user/features/todos/model/Todo").Todo[];
        }>;
        auth: import("redux").CombinedState<import("dmf_user/features/auth/store/reducer").AuthState>;
    }>, import("redux").AnyAction>;
    export type UserState = StateType<typeof userReducer>;
    export type AppState = {
        [key: string]: any;
        router: RouterState<any>;
        user: UserState;
    };
}
declare module "dmf_user/features/todos/epics" {
    import { Epic } from 'redux-observable';
    import { AppState } from "dmf_user/store/reducer";
    import { AppAction } from "dmf_user/store/action";
    import { AppRootService } from "dmf_user/services";
    export const userLoadTodosEpic: Epic<AppAction, AppAction, AppState, AppRootService>;
    export const userSaveTodosEpic: Epic<AppAction, AppAction, AppState, AppRootService>;
}
declare module "dmf_user/features/auth/store/epics" {
    import { Epic } from 'redux-observable';
    import { AppAction } from "dmf_user/store/action";
    import { AppRootService } from "dmf_user/services";
    import { AppState } from "dmf_user/store/reducer";
    export const userLoginEpic: Epic<AppAction, AppAction, AppState, AppRootService>;
}
declare module "dmf_user/store/epic" {
    const userEpic: import("redux-observable").Epic<import("connected-react-router").CallHistoryMethodAction<[any]> | import("connected-react-router").CallHistoryMethodAction<[number]> | import("connected-react-router").CallHistoryMethodAction<[]> | import("typesafe-actions").PayloadAction<"ADD_TODO", import("dmf_user/features/todos/model/Todo").Todo> | import("typesafe-actions").PayloadAction<"REMOVE_TODO", string> | import("typesafe-actions").PayloadMetaAction<"LOAD_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadAction<"LOAD_TODOS_SUCCESS", import("dmf_user/features/todos/model/Todo").Todo[]> | import("typesafe-actions").PayloadAction<"LOAD_TODOS_FAILURE", string> | import("typesafe-actions").PayloadMetaAction<"SAVE_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadMetaAction<"SAVE_TODOS_SUCCESS", unknown, unknown> | import("typesafe-actions").PayloadAction<"SAVE_TODOS_FAILURE", string> | import("typesafe-actions").PayloadAction<"USER_LOGIN_REQUEST", import("features/auth").LoginData> | import("typesafe-actions").PayloadAction<"USER_LOGIN_SUCCESS", import("features/auth").LoginStatus> | import("typesafe-actions").PayloadAction<"USER_LOGIN_FAILURE", string>, import("connected-react-router").CallHistoryMethodAction<[any]> | import("connected-react-router").CallHistoryMethodAction<[number]> | import("connected-react-router").CallHistoryMethodAction<[]> | import("typesafe-actions").PayloadAction<"ADD_TODO", import("dmf_user/features/todos/model/Todo").Todo> | import("typesafe-actions").PayloadAction<"REMOVE_TODO", string> | import("typesafe-actions").PayloadMetaAction<"LOAD_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadAction<"LOAD_TODOS_SUCCESS", import("dmf_user/features/todos/model/Todo").Todo[]> | import("typesafe-actions").PayloadAction<"LOAD_TODOS_FAILURE", string> | import("typesafe-actions").PayloadMetaAction<"SAVE_TODOS_REQUEST", unknown, unknown> | import("typesafe-actions").PayloadMetaAction<"SAVE_TODOS_SUCCESS", unknown, unknown> | import("typesafe-actions").PayloadAction<"SAVE_TODOS_FAILURE", string> | import("typesafe-actions").PayloadAction<"USER_LOGIN_REQUEST", import("features/auth").LoginData> | import("typesafe-actions").PayloadAction<"USER_LOGIN_SUCCESS", import("features/auth").LoginStatus> | import("typesafe-actions").PayloadAction<"USER_LOGIN_FAILURE", string>, import("dmf_user/store/reducer").AppState, import("services").AppRootService>[];
    export { userEpic };
}
declare module "dmf_user/store" {
    import * as actions from "dmf_user/store/action";
    import * as epic from "dmf_user/store/epic";
    import * as reducer from "dmf_user/store/reducer";
    export { actions, epic, reducer };
}
declare module "dmf_user/features/todos/components/TodoListItem" {
    interface Props {
        title: string;
        onRemoveClick: () => void;
    }
    function TodoListItem({ title, onRemoveClick }: Props): JSX.Element;
    export default TodoListItem;
}
declare module "dmf_user/features/todos/components/TodoList" {
    import { Todo } from "dmf_user/features/todos/model/Todo";
    import { AppState } from "dmf_user/store/reducer";
    const mapStateToProps: (state: AppState) => {
        isLoading: boolean;
        todos: Todo[];
    };
    const dispatchProps: {
        removeTodo: import("typesafe-actions").PayloadActionCreator<"REMOVE_TODO", string>;
    };
    type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;
    function TodoList({ isLoading, todos, removeTodo }: Props): JSX.Element;
    const _default_1: import("react-redux").ConnectedComponent<typeof TodoList, import("react-redux").Omit<{
        isLoading: boolean;
        todos: Todo[];
    } & {
        removeTodo: import("typesafe-actions").PayloadActionCreator<"REMOVE_TODO", string>;
    }, "removeTodo" | "todos" | "isLoading">>;
    export default _default_1;
}
declare module "dmf_user/features/todos/components/TodoListActions" {
    import * as React from 'react';
    import { RouterState } from 'connected-react-router';
    import { UserState } from "dmf_user/store/reducer";
    const mapStateToProps: (state: {
        user: UserState;
        router: RouterState<any>;
    }) => {
        isLoading: boolean;
        router: RouterState<any>;
    };
    const dispatchProps: {
        loadTodos: import("typesafe-actions").PayloadMetaActionCreator<"LOAD_TODOS_REQUEST", unknown, unknown>;
        saveTodos: import("typesafe-actions").PayloadMetaActionCreator<"SAVE_TODOS_REQUEST", unknown, unknown>;
    };
    type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;
    type State = {};
    class TodoActions extends React.Component<Props, State> {
        render(): JSX.Element;
    }
    const _default_2: import("react-redux").ConnectedComponent<typeof TodoActions, import("react-redux").Omit<React.ClassAttributes<TodoActions> & {
        isLoading: boolean;
        router: RouterState<any>;
    } & {
        loadTodos: import("typesafe-actions").PayloadMetaActionCreator<"LOAD_TODOS_REQUEST", unknown, unknown>;
        saveTodos: import("typesafe-actions").PayloadMetaActionCreator<"SAVE_TODOS_REQUEST", unknown, unknown>;
    }, "router" | "isLoading" | "loadTodos" | "saveTodos">>;
    export default _default_2;
}
declare module "dmf_user/features/todos/components/AddTodoForm" {
    import * as React from 'react';
    type Props = {
        addItem: (title: string) => void;
    };
    type State = {
        title: string;
    };
    class AddTodoForm extends React.Component<Props, State> {
        readonly state: {
            title: string;
        };
        handleTitleChange: React.ReactEventHandler<HTMLInputElement>;
        handleAddClick: () => void;
        render(): JSX.Element;
    }
    const _default_3: import("react-redux").ConnectedComponent<typeof AddTodoForm, import("react-redux").Omit<React.ClassAttributes<AddTodoForm> & Props, "addItem">>;
    export default _default_3;
}
declare module "dmf_user/features/todos/components/TodosView" {
    const _default_4: () => JSX.Element;
    export default _default_4;
}
declare module "dmf_user/todos" {
    import TodoList from "dmf_user/features/todos/components/TodoList";
    import TodoListActions from "dmf_user/features/todos/components/TodoListActions";
    import TodoListItem from "dmf_user/features/todos/components/TodoListItem";
    import TodosView from "dmf_user/features/todos/components/TodosView";
    import AddTodoForm from "dmf_user/features/todos/components/AddTodoForm";
    import * as actions from "dmf_user/features/todos/actions";
    export { AddTodoForm, TodoList, TodoListActions, TodoListItem, TodosView, actions };
    export * from "dmf_user/features/todos/reducer";
}
declare module "dmf_user/features/auth/store/selectors" { }
declare module "dmf_user/features/auth/store/index" {
    export * from "dmf_user/features/auth/store/actions";
    export * from "dmf_user/features/auth/store/epics";
    export * from "dmf_user/features/auth/store/selectors";
    export * from "dmf_user/features/auth/store/reducer";
}
declare module "dmf_user/features/auth/components/Login/Login" {
    export const Login: () => JSX.Element;
}
declare module "dmf_user/features/auth/components/Login/index" {
    export * from "dmf_user/features/auth/components/Login/Login";
}
declare module "dmf_user/features/auth/components/Auth/Auth" {
    export const Auth: () => JSX.Element;
    export const PageA: () => JSX.Element;
    export const PageB: () => JSX.Element;
}
declare module "dmf_user/features/auth/components/Auth/index" {
    export * from "dmf_user/features/auth/components/Auth/Auth";
}
declare module "dmf_user/features/auth/components/index" {
    export * from "dmf_user/features/auth/components/Login/index";
    export * from "dmf_user/features/auth/components/Auth/index";
}
declare module "dmf_user/features/auth/route" {
    import { RouteObject } from 'react-router-dom';
    export const authRoutes: RouteObject[];
}
declare module "dmf_user/auth" {
    export * from "dmf_user/features/auth/components/index";
    export * from "dmf_user/features/auth/model/index";
    export * from "dmf_user/features/auth/store/index";
    export * from "dmf_user/features/auth/route";
}
