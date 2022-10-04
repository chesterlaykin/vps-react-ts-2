import './sidebar.scss';

// props: any, 
/*
 style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
      */
// export const Sidebar = ({ props, children }: { props: any, children: React.ReactNode }) => {
interface props {
  children?: React.ReactNode
}
// export const Sidebar = ( props:any, { children }: { children: React.ReactNode }) => {
// export const Sidebar = ({ children }: {children: any}) => {
export const Sidebar = (props: JSX.Props) => {
  const {children} = props;
  return (
    <div className="sidebar">
      {children}
      {/* {tezt && <p>{tezt}</p>} */}
      {props.tezt && <p>{props.tezt}</p>}
    </div>
    // { children }: { children: React.ReactNode }
  );
};
