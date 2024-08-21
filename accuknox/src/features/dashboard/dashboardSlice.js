import { createSlice } from '@reduxjs/toolkit';
import data from "../../assets/Data/widgetsData.json"; // Import JSON data directly in the slice

// Initial state with the data directly loaded from the JSON file
const initialState = {
  categories: data // Set initial state with the imported data
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        // Ensure widget ID is unique
        if (!category.widgets.find(w => w.id === widget.id)) {
          category.widgets.push(widget);
        }
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    }
  }
});

export const { addWidget, removeWidget, setCategories } = dashboardSlice.actions;
export default dashboardSlice.reducer;
