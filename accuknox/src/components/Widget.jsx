import React from 'react';
import style from "../assets/styles/Widget.module.css";

const Widget = ({ widget, onRemove }) => {
  return (
    <div className={style.widget}>
      <h3 className={style.widgetName}>{widget.name}</h3>
      <p className={style.widgetText}>{widget.text}</p>
      <button className={style.removeButton} onClick={onRemove}>
        X
      </button>
    </div>
  );
};

export default Widget;
