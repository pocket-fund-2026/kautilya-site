/// <reference types="vite/client" />

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.webm' {
  const src: string;
  export default src;
}

declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.glb' {
  const src: string;
  export default src;
}
