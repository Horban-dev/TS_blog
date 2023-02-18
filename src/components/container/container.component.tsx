import { FC, PropsWithChildren } from 'react';

interface ContainerProps { }

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
    children,
}) => {
    return <div className="container mx-auto w-3/4">{children}</div>;
};