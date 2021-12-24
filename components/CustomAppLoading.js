import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";

export const CustomAppLoading = ({
  startAsync,
  onFinish = () => {},
  onError = () => {},
  children,
}) => {
  const [execAsync, setExecAsync] = useState(true);

  useEffect(() => {
    setExecAsync(true);
    startAsync()
      .then((res) => {
        setExecAsync(false);
        onFinish(res);
      })
      .catch((e) => {
        setExecAsync(false);
        onError(e);
      });
  }, []);
  return execAsync ? <AppLoading /> : children;
};
