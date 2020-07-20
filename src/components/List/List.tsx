import React from "react";

export interface Props<T = []> {
    items: T[];
    displayData: (item: T, index: number) => React.ReactNode;
}

const List = <T extends object>({items, displayData}: Props<T>) => (
    <div>
        {items.map(displayData)}
    </div>
);

export default List;