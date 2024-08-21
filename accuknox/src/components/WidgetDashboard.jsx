import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Widget from './Widget';
import AddWidget from './AddWidget';
import style from "../assets/styles/WidgetDashboard.module.css";
import Navbar from './Navbar';
import { addWidget, removeWidget, setCategories } from '../features/dashboard/dashboardSlice';

const WidgetDashboard = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.dashboard.categories);
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [showModal, setShowModal] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  const handleFilter = (filtered) => {
    setFilteredCategories(filtered);
  };

  const handleAddWidget = (widget) => {
    if (currentCategoryId !== null) {
      dispatch(addWidget({ categoryId: currentCategoryId, widget }));
      closeModal(); 
    }
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId }));
  };

  const openModal = (categoryId) => {
    setCurrentCategoryId(categoryId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentCategoryId(null);
  };

  return (
    <div className={style.dashboardContainer}>
      <Navbar categories={categories} onFilter={handleFilter} />
      <main className={style.mainContent}>
        {filteredCategories.map((category) => (
          <div key={category.id} className={style.categoryContainer}>
            <div className={style.categoryHeader}>
              <h2>{category.category}</h2>
            </div>
            <div className={style.widgetCards}>
              {category.widgets.length === 0 ? (
                <p className={style.widgetsContainer}>No widgets available</p>
              ) : (
                <div className={style.widgetsContainer}>
                  {category.widgets.map(widget => (
                    <Widget
                      key={widget.id}
                      widget={widget}
                      onRemove={() => handleRemoveWidget(category.id, widget.id)}
                    />
                  ))}
                </div>
              )}
              <div className={style.addButtonContainer}>
                <button onClick={() => openModal(category.id)} className={style.addButton}>
                  + Add Widget
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {showModal && currentCategoryId !== null && (
        <div className={style.modalOverlay}>
          <div className={style.modalContent}>
            <span className={style.closeButton} onClick={closeModal}>&times;</span>
            <div className={style.modalHeader}>
              <h3>Add New Widget</h3>
            </div>
            <AddWidget categoryId={currentCategoryId} onAddWidget={handleAddWidget} />
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetDashboard;
