import React from 'react';

const Select = ({ 
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  error,
  required = false,
  className = '',
  icon,
  ...props 
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        <select
          value={value}
          onChange={onChange}
          className={`
            w-full px-4 py-3 ${icon ? 'pl-10' : ''} 
            border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-primary-500 focus:border-transparent 
            transition-all duration-200
            bg-white
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
          `}
          {...props}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Select;
