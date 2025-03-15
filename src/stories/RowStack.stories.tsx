import * as React from "react";
import type { Story } from "@ladle/react";
import { Fit, RowStack, Fill, Fixed } from "../index";
import { Item, Item1, Item2, Item2InlineBlock, Item3, Root, RootItem } from "./StoryStyles";

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
    <Root>
        <RootItem>
            <RowStack verticalAlign={"top"}>
                {items}
            </RowStack>
        </RootItem>
        <RootItem>
            <RowStack verticalAlign={"baseline"} gap={4}>
                {items}
            </RowStack>
        </RootItem>
        <RootItem>
            <RowStack verticalAlign={"bottom"} gap={4}>
                {items}
            </RowStack>
        </RootItem>
        <RootItem>
            <RowStack verticalAlign={"stretch"} gap={4}>
                {items}
            </RowStack>
        </RootItem>
        <RootItem>
            <RowStack verticalAlign={"center"} gap={4}>
                {items}
            </RowStack>
        </RootItem>
        <RootItem>
            <RowStack block verticalAlign={"center"} gap={4}>
                {items}
            </RowStack>
        </RootItem>
    </Root>
)

export const WithFill = () => (
    <Root>
        <RootItem>
            <RowStack block verticalAlign={"top"}>
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
            </RowStack>
        </RootItem>
        <RootItem>
            <RowStack block verticalAlign={"top"}>
                <Fit>
                    <Item>
                        <Item1>Item 1</Item1>
                    </Item>
                </Fit>
                <Fill>
                    <Item>
                        <Item2InlineBlock>Item 2</Item2InlineBlock>
                    </Item>
                </Fill>
                <Fit>
                    <Item>
                        <Item3>Item 3</Item3>
                    </Item>
                </Fit>
            </RowStack>
        </RootItem>
        <RootItem>
            <RowStack block verticalAlign={"top"}>
                <Fit>
                    <Item>
                        <Item1>Item 1</Item1>
                    </Item>
                </Fit>
                <Fixed width={200}>
                    <Item>
                        <Item2InlineBlock>Item 2</Item2InlineBlock>
                    </Item>
                </Fixed>
                <Fit>
                    <Item>
                        <Item3>Item 3</Item3>
                    </Item>
                </Fit>
            </RowStack>
        </RootItem>
        <RootItem>
            <RowStack block verticalAlign={"top"}>
                <Fit>
                    <Item>
                        <Item1>Item 1</Item1>
                    </Item>
                </Fit>
                <Fixed width={70}>
                    <Item>
                        <Item2InlineBlock>Item2</Item2InlineBlock>
                    </Item>
                </Fixed>
                <Fit>
                    <Item>
                        <Item3>Item 3</Item3>
                    </Item>
                </Fit>
            </RowStack>
        </RootItem>
        <RootItem>
            <RowStack block verticalAlign={"top"}>
                <Fit>
                    <Item>
                        <Item1>Item 1</Item1>
                    </Item>
                </Fit>
                <Fixed width={400}>
                    <Item>
                        <Item2InlineBlock>Item2</Item2InlineBlock>
                    </Item>
                </Fixed>
                <Fit>
                    <Item>
                        <Item3>Item 3</Item3>
                    </Item>
                </Fit>
            </RowStack>
        </RootItem>
    </Root>
);
