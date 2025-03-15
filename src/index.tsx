import * as React from "react";

const dropLastChildMarginRight = "a579fb7e4";
const dropLastChildMarginBottom = "a961eba0a";

addStyleTag(`
    .${dropLastChildMarginRight} > *:last-child {
        margin-right: 0 !important;
    }
    .${dropLastChildMarginBottom} > *:last-child {
        margin-bottom: 0 !important;
    }    
`, "react-stack-layout-2.0");

type VerticalAlign = "top" | "bottom" | "center" | "baseline" | "stretch";

const GapFactorContext =  React.createContext(5);
const GapContext =  React.createContext(0);
const DirectionContext =  React.createContext<"row" | "column">("row");

export const ReactStackLayoutGapFactorProvider = GapFactorContext.Provider;

interface RowStackProps {
    tag?: string | React.ComponentType;
    children?: React.ReactNode;
    block?: boolean;
    inline?: boolean;
    baseline?: boolean;
    verticalAlign?: VerticalAlign;
    className?: string;
    style?: React.CSSProperties;
    gap?: number;
}

const verticalAlignMap = {
    top: "flex-start",
    bottom: "flex-end",
    center: "center",
    baseline: "baseline",
    stretch: "stretch",
};

function getFlexBoxAlignItems(horizontalAlign: VerticalAlign | typeof undefined, baseline: boolean): string {
    let resultHorizontalAlign = horizontalAlign || "top";
    if (baseline) {
        if (horizontalAlign !== undefined) {
            throw new Error("Should be specified horizontalAlign or one of it's shorthand");
        }
        resultHorizontalAlign = "baseline";
    }
    return verticalAlignMap[resultHorizontalAlign];
}

export function RowStack(props: RowStackProps) {
    const {
        tag,
        children,
        className,
        block,
        inline,
        baseline,
        verticalAlign,
        style = {},
        gap = 0,
        ...restProps
    } = props;
    const TagComponent: any = tag || "div";

    if (block && inline) {
        throw new Error("Only one of block or inline property should be specified");
    }
    const resultStyle = {
        display: block || (inline === false) ? "flex" : "inline-flex",
        flexFlow: "row nowrap",
        alignItems: getFlexBoxAlignItems(verticalAlign, baseline || false),
        ...style,
    };

    return (
        <GapContext.Provider value={gap}>
            <DirectionContext.Provider value={"row"}>
                <TagComponent 
                    className={`${dropLastChildMarginRight} ${className ?? ""}`} 
                    style={resultStyle} 
                    {...restProps}>
                    {children}
                </TagComponent>
            </DirectionContext.Provider>
        </GapContext.Provider>
    );
}

type HorizontalAlign = "left" | "right" | "center" | "stretch";

interface ColumnStackProps {
    tag?: string | React.ComponentType;
    children?: React.ReactNode;
    block?: boolean;
    inline?: boolean;
    stretch?: boolean;
    horizontalAlign?: HorizontalAlign;
    className?: string;
    style?: React.CSSProperties;
    gap?: number;
}

const alignMap = {
    left: "flex-start",
    right: "flex-end",
    center: "center",
    stretch: "stretch",
};

function getColumnFlexBoxAlignItems(align: HorizontalAlign | typeof undefined, stretch: boolean): string {
    let resultAlign = align || "left";
    if (stretch) {
        if (align !== undefined) {
            throw new Error("Should be specified horizontalAlign or one of it's shorthand");
        }
        resultAlign = "stretch";
    }
    return alignMap[resultAlign];
}

export function ColumnStack(props: ColumnStackProps) {
    const {
        tag,
        children,
        block,
        inline,
        stretch,
        horizontalAlign,
        className = "",
        style = {},
        gap = 0,
        ...restProps
    } = props;

    if (block === true && inline === true) {
        throw new Error("Only one of block or inline property should be specified");
    }

    const resultStyle = {
        display: block || (inline === false) ? "flex" : "inline-flex",
        maxWidth: "100%",
        flexFlow: "column nowrap",
        alignItems: getColumnFlexBoxAlignItems(horizontalAlign, stretch || false),
        ...style,
    };

    const TagComponent: any = tag || "div";
    return (
        <GapContext.Provider value={gap}>
            <DirectionContext.Provider value={"column"}>
                <TagComponent 
                    className={`${dropLastChildMarginBottom} ${className ?? ""}`} 
                    style={resultStyle} 
                    {...restProps}>
                    {children}
                </TagComponent>
            </DirectionContext.Provider>
        </GapContext.Provider>
    );
}

interface FitProps {
    tag?: string | React.ComponentType;
    className?: string;
    children?: React.ReactNode;
    nextGap?: number;
    style?: React.CSSProperties;
    title?: null | string;
    htmlFor?: null | string;
    onClick?(e: React.MouseEvent): void;
}

export function Fit({ tag, nextGap, children, style, ...rest }: FitProps) {
    const TagComponent: any = tag || "div";
    
    const direction = React.useContext(DirectionContext);
    const gap = nextGap ?? React.useContext(GapContext);
    const gapFactor = React.useContext(GapFactorContext);

    const directionStyle = direction == "row" ? { 
        maxWidth: "100%",
        flexGrow: 0,
        flexShrink: 0,
        marginRight: gap * gapFactor, 
    } : {
        flexGrow: 0,
        flexShrink: 0,
        marginBottom: gap * gapFactor, 
    };

    return (
        <TagComponent style={{ ...directionStyle, ...style }} {...rest}>
            {children}
        </TagComponent>
    );
}

interface FillProps {
    tag?: string | React.ComponentType;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    nextGap?: number;
}

export function Fill({ tag, children, className, nextGap, style, ...rest }: FillProps) {
    const TagComponent: any = tag || "div";
    
    const direction = React.useContext(DirectionContext);
    const gap = nextGap ?? React.useContext(GapContext);
    const gapFactor = React.useContext(GapFactorContext);

    const directionStyle = direction == "row" ? {
        flex: "0 1 100%",
        marginRight: gap * gapFactor,
    } : {
        flex: "1 1 auto",
        marginBottom: gap * gapFactor,
    }

    return (
        <TagComponent style={{ ...directionStyle, ...style }} {...rest}>
            {children}
        </TagComponent>
    );
}

interface FixedProps {
    "data-tid"?: string;
    tag?: string | React.ComponentType;
    className?: string;
    children?: React.ReactNode;
    style?: {};
    width: number;
    allowWrap?: boolean;
    nextGap?: number;
    onClick?(): void;
}

export function Fixed({ tag, children, width, className, style, allowWrap, nextGap, ...rest }: FixedProps) {
    const TagComponent: any = tag || "div";
    
    const direction = React.useContext(DirectionContext);
    const gap = nextGap ?? React.useContext(GapContext);
    const gapFactor = React.useContext(GapFactorContext);

    const directionStyle = direction == "row" ? {
        flexGrow: 0,
        flexShrink: 0,
        marginRight: gap * gapFactor,
    } : {
        flexGrow: 0,
        flexShrink: 0,
        marginBottom: gap * gapFactor,
    }

    const wrapStyles = !allowWrap ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
    } : {};

    return (
        <TagComponent style={{ ...directionStyle, wrapStyles, ...style }} {...rest}>
            {children}
        </TagComponent>
    );
}

function addStyleTag(content: string, id: string): void {
    if (document.getElementById(id)) {
        return;
    }

    const style = document.createElement("style");
    style.id = id;
    style.type = "text/css";
    style.appendChild(document.createTextNode(content));
    document.head.appendChild(style);
}
