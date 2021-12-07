/// <reference types="react" />
declare module "dmf_ui/core/Core" {
    export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'none';
    export type RippleType = 'dark' | 'light';
    export type BaseSize = 'sm' | 'base' | 'lg';
    export type VariationPlacement = "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    export type AutoPlacement = "auto" | "auto-start" | "auto-end";
    export type BasePlacement = "top" | "bottom" | "right" | "left";
    export type Placement = AutoPlacement | BasePlacement | VariationPlacement;
    export const TextColor: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    export const Border: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    export const Bg: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    export const FocusBg: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    export const HoverBg: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
        none: import("twin.macro").TwStyle;
    };
    export const OutlineHoverBg: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    export const ActiveBg: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    export const OutlineActiveBg: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    export const HoverShadowLgBg: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    export const OutlineHoverBorder: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    export const TextHoverColor: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
}
declare module "dmf_ui/label/Label" {
    import React, { FunctionComponent } from 'react';
    import { Color } from "dmf_ui/core/Core";
    export const TextColor: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
    };
    const Label: FunctionComponent<Props>;
    export default Label;
}
declare module "dmf_ui/label/ClosingLabel" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
    };
    export default function ClosingLabel({ children, color, className, }: Props): JSX.Element;
}
declare module "dmf_ui/Button" {
    import React from 'react';
    type Props = {
        buttonType?: 'fill' | 'outline' | 'link';
        block?: boolean;
        rounded?: boolean;
        className?: string;
        ripple?: 'dark' | 'light';
        size?: 'md' | 'sm' | 'lg';
        color?: 'primary' | 'secondary';
        iconOnly?: boolean;
        children?: React.ReactNode;
        onClick?: (event: Event) => void;
    };
    const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
    export default Button;
}
declare module "dmf_ui/Icon" {
    import { HTMLAttributes } from 'react';
    import { BaseSize, Color } from "dmf_ui/core/Core";
    interface Props extends HTMLAttributes<HTMLSpanElement> {
        name: string;
        family?: 'material-icons' | 'font-awesome' | 'remixicon';
        size?: BaseSize | 'xs' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
        color?: Color;
    }
    export const IconColor: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    export default function Icon({ family, name, color, size, ...rest }: Props): any;
}
declare module "dmf_ui/alert/Alert" {
    import React from 'react';
    type Props = {
        color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
        className?: string;
        children?: React.ReactNode;
    };
    export default function Alert({ children, color, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/alert/ClosingAlert" {
    import React from 'react';
    type Props = {
        color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
        className?: string;
        duration?: number;
        children?: React.ReactNode;
    };
    export default function ClosingAlert({ children, color, duration, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/card/Card" {
    import React from 'react';
    type Props = {
        className?: string;
        children: React.ReactNode;
    };
    export default function Card({ children, className }: Props): JSX.Element;
}
declare module "dmf_ui/card/CardBody" {
    import React from 'react';
    type Props = {
        className?: string;
        children: React.ReactNode;
    };
    export default function CardBody({ children, className }: Props): JSX.Element;
}
declare module "dmf_ui/card/CardFooter" {
    import React from 'react';
    type Props = {
        className?: string;
        children: React.ReactNode;
    };
    export default function CardFooter({ children, className }: Props): JSX.Element;
}
declare module "dmf_ui/card/CardHeader" {
    import React from 'react';
    type Props = {
        color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
        iconOnly?: boolean;
        size?: 'md' | 'sm' | 'lg';
        position?: 'left' | 'right' | 'center';
        className?: string;
        children?: React.ReactNode;
    };
    export default function CardHeader({ children, color, size, position, iconOnly, className, }: Props): JSX.Element;
}
declare module "dmf_ui/card/CardImage" {
    import React from 'react';
    type Props = {
        src: string;
        className?: string;
        alt?: string;
        onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
    };
    export default function CardImage({ src, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/card/CardRow" {
    import React from 'react';
    type Props = {
        className?: string;
        children: React.ReactNode;
    };
    export default function CardRow({ children, className }: Props): JSX.Element;
}
declare module "dmf_ui/card/CardStatus" {
    import React from 'react';
    type Props = {
        title: string;
        amount: string;
        className?: string;
        children: React.ReactNode;
    };
    export default function CardStatus({ title, amount, className }: Props): JSX.Element;
}
declare module "dmf_ui/card/CardStatusFooter" {
    import React from 'react';
    type Props = {
        color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
        title: string;
        amount: string;
        date?: string;
        className?: string;
        children: React.ReactNode;
    };
    export default function CardStatusFooter({ children, color, amount, date, className, }: Props): JSX.Element;
}
declare module "dmf_ui/typography/H1" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
        onclick?: (event: Event) => void;
    };
    export default function H1({ children, color, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/typography/H2" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
        onclick?: (event: Event) => void;
    };
    export default function H2({ children, color, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/typography/H3" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
        onclick?: (event: Event) => void;
    };
    export default function H3({ children, color, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/typography/H4" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
        onclick?: (event: Event) => void;
    };
    export default function H4({ children, color, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/typography/H5" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
        onclick?: (event: Event) => void;
    };
    export default function H5({ children, color, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/typography/H6" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
        onclick?: (event: Event) => void;
    };
    export default function H6({ children, color, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/typography/LeadText" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
        onclick?: (event: Event) => void;
    };
    export default function LeadText({ children, color, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/typography/Paragraph" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
        onclick?: (event: Event) => void;
    };
    export default function Paragraph({ children, color, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/typography/Quote" {
    import React from 'react';
    type Props = {
        color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
        footer: string;
        cite: string;
        className?: string;
        children: React.ReactNode;
        onclick?: (event: Event) => void;
    };
    export default function Quote({ children, color, footer, cite, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/typography/Small" {
    import React from 'react';
    type Props = {
        color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
        children: React.ReactNode;
        onclick?: (event: Event) => void;
    };
    export default function Small({ children, color, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/Checkbox" {
    import { InputHTMLAttributes } from 'react';
    import { Color } from "dmf_ui/core/Core";
    interface Props extends InputHTMLAttributes<HTMLInputElement> {
        text: string;
        color?: Color;
    }
    export default function Checkbox({ color, text, id, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/Radio" {
    import { OptionHTMLAttributes } from 'react';
    import { Color } from "dmf_ui/core/Core";
    interface Props extends OptionHTMLAttributes<HTMLOptionElement> {
        text: string;
        name: string;
        color?: Color;
    }
    export default function Radio({ color, text, id, name, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/Dropdown" {
    import { ButtonHTMLAttributes } from 'react';
    import { Color, Placement, RippleType, BaseSize } from "dmf_ui/core/Core";
    interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
        buttonText: string;
        buttonType?: 'outline' | 'link' | 'fill';
        size?: BaseSize;
        placement?: Placement;
        rounded?: boolean;
        block?: boolean;
        ripple?: RippleType;
        color?: Color;
    }
    export default function Dropdown({ children, buttonText, color, buttonType, size, placement, rounded, block, ripple, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/DropdownItem" {
    import { HTMLAttributes } from 'react';
    import { Color, RippleType } from "dmf_ui/core/Core";
    interface Props extends HTMLAttributes<HTMLSpanElement> {
        color?: Color;
        ripple?: RippleType;
    }
    export default function DropdownItem({ children, color, ripple, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/DropdownLink" {
    import { AnchorHTMLAttributes } from 'react';
    import { Color, RippleType } from "dmf_ui/core/Core";
    interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
        color?: Color;
        ripple?: RippleType;
    }
    export default function DropdownLink({ children, color, ripple, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/Image" {
    import { ImgHTMLAttributes } from 'react';
    interface Props extends ImgHTMLAttributes<HTMLImageElement> {
        src: string;
        raised?: boolean;
        rounded?: boolean;
    }
    export default function Image({ src, raised, rounded, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/Input" {
    import { InputHTMLAttributes } from 'react';
    import { Color, BaseSize } from "dmf_ui/core/Core";
    interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
        placeholder: string;
        color?: Color;
        size?: BaseSize;
        outline?: boolean;
        error?: string;
        success?: string;
        iconFamily?: 'material' | 'awesome';
        iconName?: string;
    }
    export default function Input({ placeholder, color, size, outline, error, success, iconFamily, iconName, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/TextArea" {
    import { TextareaHTMLAttributes } from 'react';
    import { Color, BaseSize } from "dmf_ui/core/Core";
    interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
        placeholder: string;
        color?: Color;
        size?: BaseSize;
        outline?: boolean;
        error?: string;
        success?: string;
    }
    export default function TextArea({ placeholder, color, size, outline, error, success, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/Modal" {
    import React from 'react';
    import { BaseSize } from "dmf_ui/core/Core";
    type Props = {
        children: React.ReactNode;
        size?: BaseSize;
        active?: boolean;
        className?: string;
        toggler?: (event: any) => void;
    };
    export default function Modal({ children, size, active, className, toggler, }: Props): JSX.Element;
}
declare module "dmf_ui/ModalBody" {
    import React from 'react';
    type Props = {
        children: React.ReactNode;
    };
    export default function ModalBody({ children }: Props): JSX.Element;
}
declare module "dmf_ui/ModalFooter" {
    import React from 'react';
    type Props = {
        children?: React.ReactNode;
    };
    export default function ModalFooter({ children }: Props): JSX.Element;
}
declare module "dmf_ui/ModalHeader" {
    import React from 'react';
    type Props = {
        children?: React.ReactNode;
        toggler: (e: any) => void;
    };
    export default function ModalHeader({ children, toggler }: Props): JSX.Element;
}
declare module "dmf_ui/Popover" {
    import React from 'react';
    import { Placement } from "dmf_ui/core/Core";
    type Props = {
        children: React.ReactNode;
        className?: string;
        placement: Placement;
    };
    const Popover: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
    export default Popover;
}
declare module "dmf_ui/PopoverBody" {
    import React from 'react';
    type Props = {
        children: React.ReactNode;
        className?: string;
    };
    export default function PopoverBody({ children, className }: Props): JSX.Element;
}
declare module "dmf_ui/PopoverContainer" {
    import React from 'react';
    type Props = {
        children: React.ReactNode;
        className?: string;
    };
    export default function PopoverContainer({ children, className }: Props): JSX.Element;
}
declare module "dmf_ui/PopoverHeader" {
    import React from 'react';
    type Props = {
        children: React.ReactNode;
        className?: string;
    };
    export default function PopoverHeader({ children, className }: Props): JSX.Element;
}
declare module "dmf_ui/Tooltips" {
    import React from 'react';
    import { Placement } from "dmf_ui/core/Core";
    type Props = {
        children: React.ReactNode;
        placement?: Placement;
        className?: string;
    };
    const Tooltips: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
    export default Tooltips;
}
declare module "dmf_ui/TooltipsContent" {
    import React from 'react';
    type Props = {
        children: React.ReactNode;
        className?: string;
    };
    export default function TooltipsContent({ children, className }: Props): JSX.Element;
}
declare module "dmf_ui/nav/Nav" {
    import React from 'react';
    type Props = {
        leftSide: boolean;
        className?: string;
        children: React.ReactNode;
    };
    export default function Nav({ children, leftSide, className, }: Props): JSX.Element;
}
declare module "dmf_ui/nav/NavItem" {
    import React, { LiHTMLAttributes } from 'react';
    interface Props extends LiHTMLAttributes<HTMLLIElement> {
        active?: boolean;
        ripple?: string;
        className?: string;
        children?: React.ReactNode;
    }
    export default function NavItem({ children, active, ripple, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/nav/NavLink" {
    import React, { AnchorHTMLAttributes } from 'react';
    interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
        active?: boolean;
        ripple?: 'dark' | 'light';
        className?: string;
        children: React.ReactNode;
    }
    export default function NavLink({ children, active, ripple, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/navbar/Navbar" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        color?: Color;
        navbar?: boolean;
        className?: string;
        children: React.ReactNode;
    };
    export default function Navbar({ children, color, navbar, className, }: Props): JSX.Element;
}
declare module "dmf_ui/navbar/NavbarBrand" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
    };
    export default function NavbarBrand({ children, className, color }: Props): JSX.Element;
}
declare module "dmf_ui/navbar/NavbarCollapse" {
    import React from 'react';
    type Props = {
        open: boolean;
        className?: string;
        children: React.ReactNode;
    };
    export default function NavbarCollapse({ children, className, open, }: Props): JSX.Element;
}
declare module "dmf_ui/navbar/NavbarContainer" {
    import React from 'react';
    type Props = {
        className?: string;
        children: React.ReactNode;
    };
    export default function NavbarContainer({ children, className }: Props): JSX.Element;
}
declare module "dmf_ui/navbar/NavbarInput" {
    import { InputHTMLAttributes } from 'react';
    interface Props extends InputHTMLAttributes<HTMLInputElement> {
        fontAwesome?: boolean;
        className?: string;
    }
    export default function NavbarInput({ fontAwesome, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/navbar/NavbarToggler" {
    import React, { ButtonHTMLAttributes } from 'react';
    import { Color } from "dmf_ui/core/Core";
    interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
        color: Color;
        ripple: 'dark' | 'light';
        className?: string;
        children?: React.ReactNode;
    }
    export default function NavbarToggler({ color, ripple, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/navbar/NavbarWrapper" {
    import React from 'react';
    type Props = {
        className?: string;
        children: React.ReactNode;
    };
    export default function NavbarWrapper({ children, className }: Props): JSX.Element;
}
declare module "dmf_ui/tab/Tab" {
    import React from 'react';
    type Props = {
        className?: string;
        children: React.ReactNode;
    };
    export default function Tab({ children, className }: Props): JSX.Element;
}
declare module "dmf_ui/tab/TabContent" {
    import React from 'react';
    type Props = {
        children: React.ReactNode;
    };
    export default function TabContent({ children }: Props): JSX.Element;
}
declare module "dmf_ui/tab/TabItem" {
    import React, { AnchorHTMLAttributes } from 'react';
    interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
        children: React.ReactNode;
        className?: string;
        active?: boolean;
        ripple?: 'dark' | 'light';
    }
    export default function TabItem({ children, active, ripple, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/tab/TabList" {
    import React from 'react';
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        children: React.ReactNode;
        className?: string;
        color?: Color;
    };
    export const shadowColors: {
        primary: import("twin.macro").TwStyle;
        secondary: import("twin.macro").TwStyle;
        success: import("twin.macro").TwStyle;
        danger: import("twin.macro").TwStyle;
        warning: import("twin.macro").TwStyle;
        info: import("twin.macro").TwStyle;
    };
    export default function TabList({ children, color, className }: Props): JSX.Element;
}
declare module "dmf_ui/tab/TabPane" {
    import React from 'react';
    type Props = {
        children: React.ReactNode;
        className?: string;
        active?: boolean;
    };
    export default function TabPane({ children, active, className, }: Props): JSX.Element;
}
declare module "dmf_ui/Progress" {
    import { Color } from "dmf_ui/core/Core";
    type Props = {
        value: number;
        percentage?: boolean;
        color?: Color;
    };
    export default function Progress({ color, value, percentage, }: Props): JSX.Element;
}
declare module "dmf_ui/pagination/Pagination" {
    import React from 'react';
    type Props = {
        children: React.ReactNode;
    };
    export default function Pagination({ children }: Props): JSX.Element;
}
declare module "dmf_ui/pagination/PaginationItem" {
    import React, { AnchorHTMLAttributes } from 'react';
    import { Color, RippleType } from "dmf_ui/core/Core";
    interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
        color?: Color;
        ripple?: RippleType;
        button?: boolean;
        children: React.ReactNode;
    }
    export default function PaginationItem({ children, color, button, ripple, className, ...rest }: Props): JSX.Element;
}
