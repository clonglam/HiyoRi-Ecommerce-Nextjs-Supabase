import React, { ReactNode } from "react";

type DisabledFormDataProps = {
  data: ReactNode;
  label: string;
  htmlFor?: string;
};

function DisabledFormData({ data, label, htmlFor }: DisabledFormDataProps) {
  return (
    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <p className="text-sm text-muted-foreground">{data}</p>
    </div>
  );
}

export default DisabledFormData;
