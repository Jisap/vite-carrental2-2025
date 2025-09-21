/**
 * FormField es un componente reutilizable y flexible para crear elementos de formulario
 * como `<input>` y `<textarea>` con un estilo consistente.
 *
 * Utiliza una prop `as` para determinar qué elemento HTML renderizar,
 * y pasa todas las demás props directamente a ese elemento.
 *
 * @param {object} props - Las props para el componente.
 * @param {string | React.ComponentType} [props.as='input'] - El elemento o componente a renderizar. Por defecto es 'input'.
 * @param {object} props... - Cualquier otra prop se pasará al elemento renderizado (ej. type, placeholder, rows, etc.).
 * @returns {JSX.Element} El elemento de formulario renderizado con estilos comunes.
 *
 * @example
 * // Para renderizar un campo de texto
 * <FormField type="text" placeholder="Nombre" />
 *
 * @example
 * // Para renderizar un área de texto
 * <FormField as="textarea" rows="5" placeholder="Mensaje" />
 */
const FormField = ({ as: Component = 'input', ...props }) => {
  
  // Clases de Tailwind CSS comunes para todos los campos del formulario.
  const commonClasses = 'bg-[#222222] text-white placeholder-gray-400 rounded-md px-6 py-5 w-full outline-none';

  // Renderiza el componente especificado (input por defecto) con las props y clases comunes.
  return (
    <Component
      {...props}
      className={commonClasses}
    />
  );
};

export default FormField;