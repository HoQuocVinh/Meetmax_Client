import { SetStateAction, createContext, useState } from "react";

interface PostContextType {
  content: string | undefined;
  setContent: React.Dispatch<SetStateAction<string | undefined>>;
}

export const PostContext = createContext<PostContextType>({
  content: "",
  setContent: () => {},
});

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState<string | undefined>("");
  return (
    <PostContext.Provider value={{ content, setContent }}>
      {children}
    </PostContext.Provider>
  );
};
