// import { useEffect } from "react"

import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

// 解决快速输入下反复请求
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化后设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect运行完之后在执行，如果value连续变化useEffect连续调用，那么在上一次定时器还未执行完时该定时器就会被清除掉
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
