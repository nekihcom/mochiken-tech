import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const GlobalContainer:FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="max-w-90per mx-auto">
      { children }
    </div>
  );
}

export default GlobalContainer;