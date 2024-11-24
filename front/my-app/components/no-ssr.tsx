import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

// NoSsrコンポーネントのプロパティ型を定義
type NoSsrProps = {
  children: ReactNode;
};

// NoSsrコンポーネントを定義
const NoSsr: React.FC<NoSsrProps> = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false, // サーバーサイドレンダリングを無効化
});