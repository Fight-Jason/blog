import React from "react";
import  * as Icon from '@ant-design/icons';

// 自定义icon
const ThemeIcon = (props) => {
    const { type } = props;
    return (
        <>
            {
                React.createElement(
                    Icon[type]
                )
            }
        </>
    )
}


export default ThemeIcon
