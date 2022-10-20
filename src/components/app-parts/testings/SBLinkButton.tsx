import { ISBLinkButton } from '@/types/common';
import s from './isb-link-button.module.scss';

type IProps = {
    buttonData?: ISBLinkButton;
    bgColor?: string;
};
export const SBLinkButton = ( pr : IProps) => {

    const cssVars = {"--bg-color": pr.bgColor ?? ''};
    const target = pr.buttonData?.targetBlank ? "_blank" : null;

    return (
        <div className={s['sb-link']} style={cssVars as React.CSSProperties}>
    <p>SBLinkButtonV3</p>
   {pr.buttonData && <a href={pr.buttonData.text || ''} target={target || ''}>
     { pr.buttonData.text }
   </a>}
 </div>
    );
};