import React, { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
const SectionContainer = forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, id, className, ...rest } = props;
  return (
    <section
      {...rest}
      ref={ref}
      id={id}
      className={`md:px-40 px-10 py-24 max-screen-w m-auto ${className}`}
    >
      {children}
    </section>
  );
});

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
