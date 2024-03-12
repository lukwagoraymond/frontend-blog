/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech",
   "Fintech", "Health", 'Enterprise','Growth'];
  return (
    <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-3 text-gray-900 font-semibold">
      <button onClick={() => onSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? '' : 'active-button'}`}>All</button>
      {
        categories.map((category) => {
          return <button key={category} className={`mr-2 space-x-16 ${activeCategory === category ? 'active-button': ''}`} onClick={() => onSelectCategory(category)}>
            {category}
          </button>
        })
      }
    </div>
  )
}
CategorySelection.PropTypes = {
  onSelectCategory: PropTypes.func.isRequired,
  activeCategory: PropTypes.bool
}
export default CategorySelection
