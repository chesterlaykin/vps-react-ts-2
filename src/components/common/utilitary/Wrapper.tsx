type IProps  = JSX.Props & {
    wrapper: (children:React.ReactNode) => any,
    useWrapper?: boolean
}
const defaultProps = {
  useWrapper: true
}
export const Wrapper = (pr: IProps) => {
  pr = { ...defaultProps, ...pr };
  return pr.useWrapper ? pr.wrapper(pr.children) : pr.children;
}
