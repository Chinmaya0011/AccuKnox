import React, { useState } from 'react';
import style from "../assets/styles/AddWidget.module.css";

const AddWidget = ({ categoryId, onAddWidget }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(), 
      name: widgetName,
      text: widgetText
    };
    onAddWidget(newWidget);
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.addWidgetForm}>
      <input
        type="text"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        placeholder="Widget Name"
        required
        className={style.inputField}
      />
      <textarea
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        placeholder="Widget Text"
        required
        className={style.textArea}
      />
      <button type="submit" className={style.submitButton}>Add Widget</button>
    </form>
  );
};

export default AddWidget;
