import  { forwardRef, Ref } from 'react';
import { Label } from './label';
import { Input } from './input';

interface InputFileProps {
  label?: string;
  props:{
    onChange?: ()=>void
  }
}

export const InputFile = forwardRef(
  ({ label = "", ...props }:InputFileProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div>
        {label && (
          <Label
            className="flex items-start font-medium text-gray-700 mb-2"
            htmlFor={label}
          >
            {label}
          </Label>
        )}
        <Input id={label} type="file" ref={ref} {...props} />
      </div>
    );
  }
);

InputFile.displayName = "InputFile";


