import  { forwardRef, Ref } from 'react';
import { Label } from './label';
import { Input } from './input';

interface InputFileProps {
  label?: string;
}

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  ({ label = "", ...props }, ref: Ref<HTMLInputElement>) => {
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


