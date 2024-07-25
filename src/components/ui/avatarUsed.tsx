import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "./avatar"
  
  interface avatarUsedProps {
    imageSrc: string,
    className?:string
  }
  export function AvatarUsed({imageSrc,className}:avatarUsedProps) {
    return (
      <Avatar>
        <AvatarImage src={imageSrc} alt="@shadcn" className={className}/>
      </Avatar>
    )
  }
  