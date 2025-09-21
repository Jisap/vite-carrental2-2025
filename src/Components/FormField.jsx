


const FormField = ({ as: Component = 'input', ...props }) => {
  
  const commonClasses = 'bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-5 w-full outline-none';

  return (
    <Component
      {...props}
      className={commonClasses}
    />
  );
};

export default FormField;