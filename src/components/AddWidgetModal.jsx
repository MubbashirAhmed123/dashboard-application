import React, { useState } from 'react';

const AddWidgetForm = ({ categories, categoryId, addWidget, setModelOpen }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id || '')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory) {
        const newWidget = {
            id: new Date().getTime(),
            name: widgetName,
            content: widgetContent
        };
        
        addWidget(parseInt(selectedCategory), newWidget);
        setModelOpen(false);
    }
};

  return (
    <div className='fixed right-0 top-0 h-full bg-gray-100  '>
            <h1 className='bg-blue-700 w-full p-2 text-white'>Add Widgets</h1>
            <p className='mt-3 p-2'>Personalise your dashboard by adding the following widget</p>

      <form onSubmit={handleSubmit} className="p-4  rounded-lg h-full">

        <div className='mb-2'>
          <label htmlFor="" className='font-bold '>Select Category</label>
          <select name="" id="" className='p-2 mx-4' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-1">Widget Name</label>
          <input
            type="text"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter widget name"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-1">Widget Content</label>
          <textarea
            value={widgetContent}
            onChange={(e) => setWidgetContent(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter widget content"
          ></textarea>
        </div>
        <div className='fixed bottom-5 right-5'>
          <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Widget
          </button>
          <button type="button" className="mt-2 mx-5 bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300" onClick={() => setModelOpen(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWidgetForm;
