import dynamic from "next/dynamic";
import React from "react";


// NoSsrコンポーネントを定義
const NoSsr: React.FC = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), {
    ssr: false, // サーバーサイドレンダリングを無効化
  });