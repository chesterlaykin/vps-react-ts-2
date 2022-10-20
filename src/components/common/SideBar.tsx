import './sidebar.module.scss';
import s from './sidebar.module.scss';

// export const Sidebar = ( props:any, { children }: { children: React.ReactNode }) => {

export const Sidebar = (props: JSX.Props) => {
  const {children} = props;
  return (
    <div className={`${s.sidebar} ${s.funny}`}>
      {children}
    </div>
  );
};
