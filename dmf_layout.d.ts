/// <reference types="react" />
declare module "dmf_layout/Footer" {
    const Footer: () => JSX.Element;
    export default Footer;
}
declare module "dmf_layout/Header" {
    const Header: () => JSX.Element;
    export default Header;
}
declare module "dmf_layout/layout/AuthLayout" {
    type Props = {
        className?: string;
        header?: JSX.Element;
        footer?: JSX.Element;
        leftMenu?: JSX.Element;
        rightMenu?: JSX.Element;
        children: JSX.Element;
    };
    const AuthLayout: ({ children, className, header, footer }: Props) => JSX.Element;
    export default AuthLayout;
}
declare module "dmf_layout/layout/NotAuthLayout" {
    type Props = {
        className?: string;
        children: JSX.Element;
        header?: JSX.Element;
        footer?: JSX.Element;
        sessions?: JSX.Element[];
    };
    const NotAuthLayout: ({ children, className, header, footer, sessions, }: Props) => JSX.Element;
    export default NotAuthLayout;
}
