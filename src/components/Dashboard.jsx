import React, { useState, useEffect } from 'react';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';
import WidgetButton from './WidgetButton';
import { toast } from 'react-toastify';

const getInitialCategories = () => {
  const savedCategories = localStorage.getItem('categories');
  if (savedCategories) {
    return JSON.parse(savedCategories);
  }
  return [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 1, name: 'Cloud Accounts', content: 'Some random text for Cloud Accounts' },
        { id: 2, name: 'Cloud Account Risk Assessment', content: 'Some random text for Cloud Account Risk Assessment' },
      ],
    },
    {
      id: 2,
      name: 'CWPP Dashboard',
      widgets: [
        { id: 3, name: 'Top 5 Namespace Specific Alerts', content: 'Some random text for Namespace Specific Alerts' },
        { id: 4, name: 'Workload Alerts', content: 'Some random text for Workload Alerts' },
      ],
    },
    {
      id: 3,
      name: 'Registry Scan',
      widgets: [
        { id: 5, name: 'Image Risk Assessment', content: 'Some random text for Image Risk Assessment' },
        { id: 6, name: 'Image Security Issues', content: 'Some random text for Image Security Issues' },
      ],
    },
  ];
};

const Dashboard = () => {
  const [categories, setCategories] = useState(getInitialCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [modelOpen, setModelOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const addWidget = (categoryId, newWidget) => {
    setCategories(categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [...category.widgets, newWidget],
        };
      }
      toast.success('Item Added Successfully.');
      return category;
    }));
  };

  const removeWidget = (categoryId, widgetId) => {
    const res = window.confirm('Are you sure you want to delete?');
    if (res) {
      setCategories(categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(widget => widget.id !== widgetId),
          };
        }
        toast.info('Item Removed Successfully.');
        return category;
      }));
    }
  };

  const filteredWidgets = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="p-4 bg-gray-200">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold text-gray-800">Dashboard</h1>
        <input
          type="text"
          placeholder="Search anything..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 p-2 w-full md:w-[300px] rounded-xl bg-gray-100 mt-2 md:mt-0"
        />
        <WidgetButton setModelOpen={setModelOpen} />
      </div>
      {filteredWidgets.map(category => (
        <div key={category.id} className="mb-8">
          <h2 className="text-lg md:text-xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.widgets.map(widget => (
              <Widget
                key={widget.id}
                categoryId={category.id}
                widget={widget}
                removeWidget={removeWidget}
              />
            ))}
            <div className='flex justify-center items-center bg-white'>
              <WidgetButton setModelOpen={setModelOpen} />
            </div>
          </div>
          {modelOpen && (
            <AddWidgetModal
              categories={categories}
              addWidget={addWidget}
              categoryId={category.id}
              setModelOpen={setModelOpen}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
