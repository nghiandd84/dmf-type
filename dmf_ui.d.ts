/// <reference types="react" />
declare module "dmf_ui/components/core/Core" {
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
    export const TextColorWithBg: {
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
    export const BgLight: {
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
    type Props = {
        color?: Color;
        className?: string;
        children: React.ReactNode;
    };
    export default function ClosingLabel({ children, color, className, }: Props): JSX.Element;
}
declare module "dmf_ui/Button" {
    import React from 'react';
    import { Color } from "dmf_ui/components/core/Core";
    type Props = {
        buttonType?: 'fill' | 'outline' | 'link';
        block?: boolean;
        rounded?: boolean;
        className?: string;
        ripple?: 'dark' | 'light';
        size?: 'md' | 'sm' | 'lg';
        color?: Color;
        iconOnly?: boolean;
        children?: React.ReactNode;
        uppercase?: boolean;
        onClick?: (event: Event) => void;
    };
    const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
    export default Button;
}
declare module "dmf_ui/Icon" {
    import { HTMLAttributes } from 'react';
    import { BaseSize, Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
    interface Props extends InputHTMLAttributes<HTMLInputElement> {
        text: string;
        color?: Color;
    }
    export default function Checkbox({ color, text, id, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/Radio" {
    import { OptionHTMLAttributes } from 'react';
    import { Color } from "dmf_ui/components/core/Core";
    interface Props extends OptionHTMLAttributes<HTMLOptionElement> {
        text: string;
        name: string;
        color?: Color;
    }
    export default function Radio({ color, text, id, name, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/Select" {
    import React, { SelectHTMLAttributes } from 'react';
    import { Color } from "dmf_ui/components/core/Core";
    interface Option {
        value: any;
        label: React.ReactNode;
    }
    interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
        label?: string;
        options: Option[];
        className?: string;
        error?: string;
        success?: string;
        isMulti?: boolean;
        isClearable?: boolean;
        isSearchable?: boolean;
        name?: string;
        outline?: boolean;
        value?: any | any[];
        placeholder?: string;
        color?: Color;
        iconFamily?: 'material' | 'awesome';
        onValueChange?: (event: any, value: any[]) => void;
    }
    export default function Select({ color, id, name, label, error, success, options, outline, value, iconFamily, multiple, isSearchable, onValueChange, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/Dropdown" {
    import { ButtonHTMLAttributes } from 'react';
    import { Color, Placement, RippleType, BaseSize } from "dmf_ui/components/core/Core";
    interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
        buttonText?: string;
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
    import { Color, RippleType } from "dmf_ui/components/core/Core";
    interface Props extends HTMLAttributes<HTMLSpanElement> {
        color?: Color;
        value?: any;
        selected?: boolean;
        ripple?: RippleType;
        onClick?: (e: any, value: any) => void;
    }
    export default function DropdownItem({ children, color, ripple, selected, className, value, onClick, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/DropdownLink" {
    import { AnchorHTMLAttributes } from 'react';
    import { Color, RippleType } from "dmf_ui/components/core/Core";
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
    import { Color, BaseSize } from "dmf_ui/components/core/Core";
    interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
        label?: string;
        placeholder?: string;
        color?: Color;
        size?: BaseSize;
        outline?: boolean;
        error?: string;
        success?: string;
        iconFamily?: 'material' | 'awesome';
        iconName?: string;
        value?: any;
    }
    export default function Input({ placeholder, label, color, size, outline, error, success, iconFamily, iconName, value, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/TextArea" {
    import { TextareaHTMLAttributes } from 'react';
    import { Color, BaseSize } from "dmf_ui/components/core/Core";
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
    import { BaseSize } from "dmf_ui/components/core/Core";
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
    import { Placement } from "dmf_ui/components/core/Core";
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
    import { Placement } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color } from "dmf_ui/components/core/Core";
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
    import { Color, RippleType } from "dmf_ui/components/core/Core";
    interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
        color?: Color;
        ripple?: RippleType;
        button?: boolean;
        children: React.ReactNode;
    }
    export default function PaginationItem({ children, color, button, ripple, className, ...rest }: Props): JSX.Element;
}
declare module "dmf_ui/components/Button/index" {
    export { default } from "dmf_ui/Button";
}
declare module "dmf_ui/components/Checkbox/index" {
    export { default } from "dmf_ui/Checkbox";
}
declare module "dmf_ui/components/Input/index" {
    export { default } from "dmf_ui/Input";
}
declare module "dmf_ui/components/Radio/index" {
    export { default } from "dmf_ui/Radio";
}
declare module "dmf_ui/dynamicForm" {
    import React from 'react';
    import { BaseSize, Color } from "dmf_ui/components/core/Core";
    export type ChangeData = {
        valid: boolean;
        data: {
            form: Record<string, any>;
            validationErrors: Record<string, boolean>;
        };
    };
    /**
     * type InputType
     * line-break to create new line with not input
     */
    export type InputType = undefined | 'line-break' | 'text' | 'custom' | 'password' | 'date' | 'email' | 'month' | 'number' | 'range' | 'color' | 'search' | 'time' | 'url' | 'week' | 'textarea' | 'checkbox' | 'select' | 'radio';
    export type ValidateFunc = (name: string, fieldValue: any, formValue?: any) => boolean;
    export interface FormInputBase {
        name: string;
        type?: InputType;
        label?: string;
        color?: Color;
        placeholder?: string;
        filter?: string;
        validationRules?: {
            rule: string | ValidateFunc | RegExp;
            message?: string;
        }[] | string[];
        size?: BaseSize;
        transformer?: Record<string, string>;
        inputClass?: string;
        outline?: boolean;
        onHide?: (data: any) => boolean;
    }
    export interface RadioInput extends FormInputBase {
        options?: OptionInput[];
        radioClass?: string;
    }
    export interface SelectInput extends FormInputBase {
        options?: OptionInput[];
        selectClass?: string;
        outline?: boolean;
    }
    export type FormInput = RadioInput | SelectInput | FormInputBase;
    export interface OptionInput {
        name: string;
        label: any;
        value: any;
    }
    type Props = {
        defaultValues?: Record<string, any>;
        classPrefix?: string;
        defaultContainerClass?: string;
        defaultInputClass?: string;
        defaultSubmitClass?: string;
        inputs?: FormInput | (FormInput | FormInput[])[];
        invalidInputClass?: string;
        validInputClass?: string;
        loading?: boolean;
        loadingElement?: React.ReactNode;
        formErrors?: {};
        submitButton?: {
            className: string;
            text: string;
        };
        validationTimeout?: number;
        onChange?: (data: ChangeData) => void;
        onSubmit: (data: ChangeData) => void;
    };
    type State = {
        form: Record<string, any>;
        inputs: FormInput | (FormInput | FormInput[])[];
        canRender: any[];
        validationErrors: Record<string, any>;
        randomisedFields: Record<string, any>;
    };
    export default class DynamicForm extends React.Component<Props, State> {
        filterRules: {
            numeric: (value: string) => boolean;
            decimal: (value: string) => boolean;
        };
        transformerRules: {
            uppercase: (value: string) => string;
            lowercase: (value: string) => string;
        };
        validationRules: {
            required: (value: any) => boolean;
            email: (value: string) => boolean;
            decimal: (value: string) => boolean;
        };
        constructor(props: Props);
        static flatInputs(entity: any): any[];
        static getDerivedStateFromProps(props: Props, state: State): {
            inputs: FormInput | (FormInput | FormInput[])[];
            canRender: any[];
            form: {
                [x: string]: any;
            };
            validationErrors: {
                [x: string]: any;
            };
            randomisedFields: {
                [x: string]: any;
            };
        };
        render(): JSX.Element;
        validateForm(display?: boolean): [boolean, Record<string, boolean>];
        validateInput(name: string, value: any, rules: any): [boolean, Record<string, boolean>];
        submitForm(): void;
        propagateChange(form: Record<string, any>, validationErrors?: any): void;
        applyFilter(event: any, filter: any): any;
        applyTransformer(event: any, transformer: any): any;
        applyValidation(event: any, validation: any, onlyValid?: boolean): Record<string, any>;
        handleInput(input: any, event: any): void;
        handleBlur(input: any, event: any): void;
        getInputValidationError(inputName: string): string;
        renderSubmitButton(): JSX.Element;
        renderSubmitButtonContents(): {};
        renderInputs(inputs: FormInput[], isRow?: boolean): JSX.Element;
        renderInput(inputs: FormInput | FormInput[]): JSX.Element;
        getValidatoinError(input: FormInput): string;
    }
}
declare module "dmf_ui/components/Table/table-types" {
    import { Color } from "dmf_ui/components/core/Core";
    export interface Icolumn {
        field: string;
        use?: string;
        useInSearch?: boolean;
        useInDisplay?: boolean;
        useInExport?: boolean;
    }
    export type Irow = Record<string, any>;
    /**
     * A function whose return value is either a JSX element or a string
     */
    export type renderFunction = (row: Irow, col: Icolumn, display_value: string) => JSX.Element | string;
    /**
     * A function when invoked, returns a string.
     */
    export type stringRenderFunc = (row: Irow, col: Icolumn, display_value: string) => string;
    export interface Iprop {
        rows: Irow[];
        columns: Icolumn[];
        perPage?: number;
        noContentText?: string;
        debounceSearchTime?: number;
        tableHeader?: string;
        showSearch?: boolean;
        shouldExport?: boolean;
        exportText?: string;
        bulkSelectOptions?: string[];
        bulkSelectButtonText?: string;
        exportCsvFile?: string;
        striped?: boolean;
        bordered?: boolean;
        hovered?: boolean;
        rowRender?: renderFunction;
        onSearch?: (search_word: string, result?: Irow[] | []) => void;
        /**
         * A function used in modifying a row member before it is used for downloading an excel sheet
         */
        exportModify?: stringRenderFunc;
        onBulkAction?: (selected_option: string, selected: Irow[]) => void;
        styling?: ItableStyle;
    }
    export interface ItableStyle {
        iconFamily?: 'material' | 'awesome';
        baseBgColor?: Color;
        baseTextColor?: Color;
        main?: string;
        top?: ItableTop;
        table_head?: {
            table_row?: string;
            table_data?: string;
        };
        table_body?: {
            main?: string;
            table_row?: string;
            table_data?: string;
        };
        footer?: {
            main?: string;
            statistics?: {
                main?: string;
                bold_numbers?: string;
            };
            page_numbers?: string;
        };
    }
    export interface ItableTop {
        title?: string;
        elements?: {
            main?: string;
            search?: {
                text?: string;
                placeHolder?: string;
                icon?: string;
            };
            bulkSelect?: {
                main?: string;
                button?: string;
            };
            export?: string;
        };
    }
    export interface Istate {
        /**
         * The rows currently being shown on the table or rows for the current active page number
         */
        active_rows: Irow[] | [];
        /**
         * All page numbers are stored in an array
         */
        page_number_list: number[];
        /**
         * Holds the current active page number
         */
        active_page_number: number;
        /**
         * An `OBJECT MAP` whose key is each page number and points to
         * the
         */
        paginated_map: IPaginated;
        /**
         * A number that holds the count of all rows
         */
        total_rows_count: number;
    }
    export interface ItableLinks {
        /**
         * An array to store the page numbers
         */
        page_number_list: number[];
        /**
         * An `OBJECT MAP` whose key is each page number and points to
         * the `IperPage` data for the page.
         */
        page_map: IPaginated;
        /**
         * a count of the pages just iterated
         */
        total_data_count: number;
    }
    /**
     * `Record like` Interface describing how the object holding each page data will look like
     */
    export interface IPaginated {
        [key: number]: IPerPage;
    }
    export interface IretainPage {
        active_number: number;
        page_map?: IPaginated;
    }
    export interface IPerPage {
        /**
         * All row data for this page
         */
        page_row_array: Irow[];
        /**
         * If this page is active, can the pagination back button be clickable ?
         */
        back_button_clickable: boolean;
        /**
         * If this page is active, can the Forward pagination button be clickable ?
         */
        forward_button_clickable: boolean;
        is_active: boolean;
        /**
         * The array index this records starts from
         */
        from_index: number;
        /**
         * A set that holds the index of all rows that a marked as checked(selected) for bulk
         * actions on this page. This holds data each page(paginated rows). This means if there are 20 pages, each page will have
         * its own `Set`, this 20 Sets in `ItableLinks.page_map` data
         */
        checked_set: Set<number>;
    }
}
declare module "dmf_ui/components/Table/utilsClass" {
    import { Irow, Icolumn, ItableLinks, IretainPage, stringRenderFunc } from "dmf_ui/components/Table/table-types";
    /**
     * This class helps run minor utilities needed by our application to quickly process
     * data and get stuff done
     */
    export default class utilsClass {
        static regex_special: string[];
        /**
         * Performs a left trim as done by
         * {@link utilsClass.trim}
         * Thus removing a single or repeating character from the rightmost part of
         * a string
         */
        static ltrim(trimString: string, regexp: string, replaceWith: string, more?: boolean, allowRegex?: boolean): string;
        static isInteger(input: any): boolean;
        /**
         * Performs a right trim as done by
         * {@link utilsClass.trim}
         * Thus removing a single or repeating character from the leftmost part of
         * a string
         */
        static rtrim(trimString: string, regexp: string, replaceWith: string, more?: boolean, allowRegex?: boolean): string;
        /**
         * Trims a sertain character from a string. This does both left and right trimming
         *
         * @param trimString  The string to be trimmed.
         * @param regexp A character to remove from the string.
         * @param replaceWith  The character or string to put in place of the replaced string.
         * @param more  if `true`, then it replacement occures for more than a single occurence, else it replaces just
         * One occurence.
         ** @param dir  Decides if it should be a right or left trim
         ** @param allowRegex  Does not escape input search element
         *
         */
        static trim(trimString: string, regexp: string, replaceWith: string, more: boolean, dir: "r" | "l", allowRegex?: boolean): string;
        /**
         * A Function to determine if two objects are arrays are equal
         *
         * V = value, O= object, O = other,T = Type, OOT =  Other Object Type
         */
        static isObjectEqual<VT, OT, VOT extends Record<string, any>, OOT extends Record<string, any>>(value: VT[] | VOT, other: OT[] | OOT): boolean;
        /**
         * Compare Primitives, Might be number, string, array , objects or  arrays
         */
        static compare<Item1T, Item2T, obj1T extends Record<string, any>, Obj2T extends Record<string, any>>(item1: string | number | Item1T[] | obj1T, item2: string | number | Item2T[] | Obj2T): boolean;
        /**
         * Tests if this given value is even.
         * @returns {boolean}
         */
        static isEven(value: number): boolean;
        /**
         * Internal function used to implement `utilsClass.throttle` and `utilsClass.debounce`.
         * @param {Function} func: function to be invoked.
         * @param {number} wait: The amount of milliseconds to wait before executing the said function.
         *
         * Borrowed from https://github.com/jashkenas/underscore/commit/9e3e067f5025dbe5e93ed784f93b233882ca0ffe
         */
        static limit<D extends Function>(func: D, wait: number, debounce: boolean): (...input: any) => void;
        /**
         *  Returns a function, that, when invoked, will only be triggered at most once
         *  during a given window of time.
         *
         *  TODO: allow to set if this callback should be invoked at the
         *            "Beginning" or "End" of the time out
         *            Currently it is invoked at the end
         */
        static throttle: (func: Function, wait: number) => (...input: any) => void;
        /**
         * Returns a "function"(rememeber to implement the function), that,
         * as long as it continues to be invoked, will not
         * be triggered. The function will be called after it stops being called for
         * N milliseconds.
         */
        static debounce: (func: Function, wait: number) => (...input: any) => void;
        static unwindObject(obj: Record<string, any>, field: string): string;
        static generateCSV(columns: Icolumn[], items: Irow[], exportModify?: stringRenderFunc): Promise<Blob>;
        /**
          * Recursively stringifies the values of an object, space separated, in an
          * SSR safe deterministic way (keys are storted before stringification)
          *
          *   ex:
          *    ```json
          *     { b: 3,
          *       c: { z: 'zzz', d: null, e: 2 },
          *       d: [10, 12, 11],
          *       a: 'one'
          *     }
          *    ```
          *   becomes
          *     'one 3 2 zzz 10 12 11'
          *
          * Primatives (numbers/strings) are returned as-is
          * Null and undefined values are filtered out
          * Dates are converted to their native string format
          */
        static stringifyObjectValues(val: Record<string, any> | any): string;
        static sanitizeRow(row: Irow, columns: Icolumn[]): object;
        static stringifyRowValues(row: Irow, column: Icolumn[]): string;
        /**
          *
          * Generates a filter function for the search string
          */
        static filterFunction(search_string: string, columns: Icolumn[]): (row: Irow) => boolean;
        /**
           * Build the RegExp (no need for global flag, as we only need
           * to find the value once in the string)
           * @param {string} str: The input text
           * @return {RegExp} The returned regex match
           */
        static stringtoRegEx(str: string): RegExp;
        static RX_SPACES$1: RegExp;
        static matchMultipleSpace(str: string): string;
        /**
         *  Borrowed this function from SENTRY(The remote error loggers)
         *
         * Escapes special characters, except for whitespace, in a string to be
         * used inside a regular expression as a string literal.
         * @param {string} text The string.
         * @return {string} The escaped string literal.
         */
        static escapeRegExp(text: string): string;
        /**
         * This function helps me paginate data and present the paginated data to the table component
         *
         * @param {string} rows The rows of data to be paginated.
         * @param {string} per_page An integer
         * @param {object} retain_expage_map Recently, I wanted to re-render components while using an updated row data(page_row_array)
         * but retaining all other property in the page_map. Thus I used this to do keep the
         * former pagemap I will be getting the data from
         * @return {ItableLinks} The Final data containing the paginated data and an array of all
         *  pages involved in the pagination i.e 1,2,3,4,5 ..... n
         */
        static TableNumberLinks(rows: Irow[], per_page?: number, retain_expage_map?: IretainPage): ItableLinks;
    }
}
declare module "dmf_ui/components/pagination/Pagination/index" {
    export { default } from "dmf_ui/pagination/Pagination";
}
declare module "dmf_ui/components/pagination/PaginationItem/index" {
    export { default } from "dmf_ui/pagination/PaginationItem";
}
declare module "dmf_ui/components/typography/Heading4/index" {
    export { default } from "dmf_ui/typography/H4";
}
declare module "dmf_ui/components/Table/table-sub-components" {
    import React from 'react';
    import { Color } from "dmf_ui/components/core/Core";
    import { Icolumn, Irow, renderFunction, IPaginated, IPerPage, stringRenderFunc } from "dmf_ui/components/Table/table-types";
    export interface ItableRow {
        row: Irow;
        columns: Icolumn[];
        /**
         * If users want to enable using bulk selects, then they have to pass in an array of strings of actions.
         * If that array of string is empty, then this will be false
         */
        use_bulk_action: boolean;
        index: number;
        render?: renderFunction;
        checked_set: Set<number>;
        active_page_number: number;
        /**
         * Whenever a single checkbox in a table row is clicked, this is invoked. Since I'm using a cotrolled input,
         * I therefore trigger an event up the tree to notify about this click. This is then recorded on the
         * `Set` that holds data of clicked rows for this page.
         */
        setCheck: (page_number: number, index: number, ischecked: boolean) => void;
        is_striped: boolean;
        is_bordered: boolean;
        is_hovered: boolean;
        row_style: string;
        data_style: string;
    }
    export function TableRow(props: ItableRow): JSX.Element;
    export function TableData(props: {
        col: Icolumn;
        row: Irow;
        render?: renderFunction;
        style: string;
    }): JSX.Element;
    interface Ithead {
        columns: Icolumn[];
        useBulkAction: boolean;
        pageData: IPerPage;
        activePageNumber: number;
        mass_checking: (page_number: number, action: 'check-all' | 'uncheck-all') => void;
        row_style: string;
        data_style: string;
    }
    export function TableHead(props: Ithead): JSX.Element;
    export function TableCaption(props: {
        text: string;
        className: string;
    }): JSX.Element;
    export function TableSearch(props: {
        onSearch: (text: string) => void;
        label?: string;
        placeHolder?: string;
        iconFamily?: 'material' | 'awesome';
    }): JSX.Element;
    interface IexportProps {
        export_text: string;
        paginated_data: IPaginated;
        cols: Icolumn[];
        file_name: string;
        processFunc?: stringRenderFunc;
        color: Color;
    }
    export function TableExport(props: IexportProps): JSX.Element;
    export function TableTop(props: {
        children?: React.ReactNode;
        style: string;
    }): JSX.Element;
    export interface ItableActProps {
        action_options: string[];
        eventSelected: (option: string) => void;
        bgColor?: Color;
        text_color?: string;
        dropdown_style: string;
        button_style: string;
        button_text: string;
    }
    export function TableBulkAction(props: ItableActProps): JSX.Element;
    interface Ifooter {
        pageNumberList: number[];
        paginatedMap: IPaginated;
        activePage: number;
        totalPages: number;
        onPageChange: (page_number: number) => void;
    }
    export function Footer(props: Ifooter): JSX.Element;
}
declare module "dmf_ui/DataTable" {
    import React from 'react';
    import { Iprop, Istate } from "dmf_ui/components/Table/table-types";
    export * from "dmf_ui/components/Table/table-types";
    export default class DataTable extends React.Component<Iprop, Istate> {
        props: Iprop;
        static propTypes: {};
        static defaultProps: {};
        state: Istate;
        /**
         * When ever a search happens, it is debounced for `this.props.debounce_search` seconds in case user
         * input is steady. This property holds the debounced funtion gotten from @see {@link utilsClass.debounce}
         */
        private processFilterdebounce;
        constructor(props: Iprop);
        componentDidUpdate(prevProps: Iprop, prevState: Istate, _snapshot: any): void;
        private bulkActClick;
        private onSearch;
        /**
         * A function that uses a promise to filter all rows using a search keyword typed into the
         * Search input bar.
         * @param filter_function
         */
        private processFilter;
        private massChecking;
        private checkBoxCheck;
        private getTotalPages;
        private onPageChange;
        private initialPaginateSetup;
        /**
         * Checks if there are bulk selected items in the table
         * @returns boolean
         */
        private isBulkSelected;
        private getStylingProps;
        render(): JSX.Element;
    }
}
