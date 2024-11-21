import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

// NoSsrコンポーネントを定義
interface NoSsrProps {
  children: ReactNode;
}

const NoSsr: React.FC<NoSsrProps> = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false, // サーバーサイドレンダリングを無効化
});
