# Những nguyên nhân làm cho Component re-render

- setState trong Component của chúng ta
- Thay đổi props
- Component cha re-render làm cho Component con cũng re-render

# React.memo

Chúng ta dùng React.memo khi không muốn component bị re-render mỗi khi component cha re-render

> Các tác nhân làm component re-render: cập nhật state, cập nhật prop, component cha re-render

React.memo là một HOC, vậy nên chỉ cần bao bọc component là được

```jsx
const newComponent = React.memo(Component)
```

React.memo chỉ tác động đến prop, không ảnh hưởng đến state

Cơ chế memo là cơ chế dùng bộ nhớ (RAM) để lưu trữ, vì thế khi dùng những thứ liên quan đến memo nghĩa là chúng ta đang đánh đổi giữa tốn nhiều bộ nhớ hơn để tăng tốc performance.

Vậy nên đừng lạm dụng quá nhé!

# useMemo

Chúng ta dùng `useMemo` khi chúng ta muốn một biến không bị làm mới lại mỗi lần component re-render

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
```

`useMemo` nhận vào các depedency để quyết định có chạy callback hay không tương tự như bên `useEffect`

# useCallback

Chúng ta dùng `useCallback` khi chúng ta không muốn function của chúng ta được khởi tạo lại mỗi lần component chúng ta re-render

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
```

Cách sử dụng tương tự như `useMemo`, ngoài ra thì chúng ta cũng có thể dùng `useMemo` thay thế cho `useCallback` cũng được

```jsx
const memoizedCallback = useMemo(() => {
  return () => doSomething(a, b)
}, [a, b])
```
