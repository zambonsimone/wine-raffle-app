import type React from "react";
import { LABELS } from "../labels";

const { AVAILABLE, NOT_AVAILABLE, SELECTED } = LABELS.DEFINITION_LIST;

const ColorSample: React.FC<{ color: string }> = ({
    color
}) => {
    return (
        <div className={`rounded bg-${color}-400 w-[1rem] h-[1rem]`}></div>
    )
}

const itemClassName = "flex text-1xl font-normal gap-[1rem] items-center uppercase";

export const DefinitionList: React.FC = () => {
    return (
        <dl className="my-[2rem]">
            <div role="presentation" className={itemClassName}>
                <dt><ColorSample color="red"/></dt>
                <dd>{NOT_AVAILABLE}</dd>
            </div>
            <div role="presentation" className={itemClassName}>
                <dt><ColorSample color="green"/></dt>
                <dd>{AVAILABLE}</dd>
            </div>
            <div role="presentation" className={itemClassName}>
                <dt><ColorSample color="blue"/></dt>
                <dd>{SELECTED}</dd>
            </div>
        </dl>
    )
}