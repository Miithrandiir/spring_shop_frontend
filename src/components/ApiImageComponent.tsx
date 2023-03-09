import React from "react";

export default function ApiImageComponent({src, ...props}: React.HTMLProps<HTMLImageElement>) {
    return <img src={"http://localhost:8080" + src} {...props} />
}