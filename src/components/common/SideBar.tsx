import './sidebar.scss';

// export const Sidebar = ( props:any, { children }: { children: React.ReactNode }) => {

export const Sidebar = (props: JSX.Props) => {
  const {children} = props;
  return (
    <div className="sidebar">
      {children}
    </div>
  );
};
