import * as React from "react";
import type { Story } from "@ladle/react";
import { Fit, ColumnStack, Fill } from "../index";
import { CsRoot, CsRootH, Item, Item1, Item2, Item3, RootItem } from "./StoryStyles";

const items = [
    <Fit key={"1"}>
        <Item>
            <Item1>Item 1</Item1>
        </Item>
    </Fit>,
    <Fit key={"2"}>
        <Item>
            <Item2>Item 2</Item2>
        </Item>
    </Fit>,
    <Fit key={"3"}>
        <Item>
            <Item3>Item 3</Item3>
        </Item>
    </Fit>,
];

export const Fits: Story = () => (
    <CsRoot>
        <RootItem>
            <ColumnStack horizontalAlign={"left"}>
                {items}
            </ColumnStack>
        </RootItem>
        <RootItem>
            <ColumnStack horizontalAlign={"right"} gap={4}>
                {items}
            </ColumnStack>
        </RootItem>
        <RootItem>
            <ColumnStack horizontalAlign={"center"} gap={4}>
                {items}
            </ColumnStack>
        </RootItem>
        <RootItem>
            <ColumnStack horizontalAlign={"stretch"} gap={4}>
                {items}
            </ColumnStack>
        </RootItem>
        <RootItem>
            <ColumnStack block horizontalAlign={"stretch"} gap={4}>
                {items}
            </ColumnStack>
        </RootItem>
    </CsRoot>
);

export const FillExample: Story = () => (
    <CsRootH>
        <RootItem>
            <ColumnStack horizontalAlign={"left"}>
                <Fit>
                    <Item>
                        <Item1>Item 1</Item1>
                    </Item>
                </Fit>
                <Fit>
                    <Item>
                        <Item2>Item 2</Item2>
                    </Item>
                </Fit>
                <Fit>
                    <Item>
                        <Item3>Item 3</Item3>
                    </Item>
                </Fit>
            </ColumnStack>
        </RootItem>
        <RootItem>
            <ColumnStack horizontalAlign={"left"}>
                <Fit>
                    <Item>
                        <Item1>Item 1</Item1>
                    </Item>
                </Fit>
                <Fill>
                    <Item>
                        <Item2>Item 2</Item2>
                    </Item>
                </Fill>
                <Fit>
                    <Item>
                        <Item3>Item 3</Item3>
                    </Item>
                </Fit>
            </ColumnStack>
        </RootItem>
        <RootItem>
            <ColumnStack horizontalAlign={"left"} style={{ height: "100%" }}>
                <Fit>
                    <Item>
                        <Item1>Item 1</Item1>
                    </Item>
                </Fit>
                <Fill>
                    <Item>
                        <Item2>Item 2</Item2>
                    </Item>
                </Fill>
                <Fit>
                    <Item>
                        <Item3>Item 3</Item3>
                    </Item>
                </Fit>
            </ColumnStack>
        </RootItem>
    </CsRootH>
);

