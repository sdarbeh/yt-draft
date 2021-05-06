import { useLayoutEffect, useRef } from "react";
// https://linguinecode.com/post/how-to-use-react-useref-with-typescript

const TextArea = (p: any) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (null !== ref.current) {
      ref.current.style.height = "0px";
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + "px";
    }
  }, [p.value]);

  return (
    <textarea
      ref={ref}
      {...p}
    />
  )
}

export default TextArea
