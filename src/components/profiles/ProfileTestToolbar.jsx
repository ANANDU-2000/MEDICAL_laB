import { Search, Trash2, Copy } from 'lucide-react';
import Button from '../ui/Button';
import './ProfileTestToolbar.css';

const ProfileTestToolbar = ({
  searchQuery = '',
  onSearchChange,
  searchPlaceholder = 'Search tests…',
  filteredCount = 0,
  totalCount = 0,
  selectedCount = 0,
  onSelectAll,
  onDeleteSelected,
  onDuplicateSelected,
  showDuplicate = true,
  className = ''
}) => {
  const allFilteredSelected = filteredCount > 0 && selectedCount === filteredCount;

  return (
    <div className={`profile-test-toolbar ${className}`.trim()}>
      <div className="profile-test-toolbar-search">
        <Search size={18} />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
        />
      </div>
      <div className="profile-test-toolbar-actions">
        {filteredCount > 0 && (
          <Button variant="outline" size="small" onClick={onSelectAll}>
            {allFilteredSelected ? 'Deselect All' : 'Select All'}
          </Button>
        )}
        {selectedCount > 0 && onDuplicateSelected && showDuplicate && (
          <Button variant="outline" size="small" icon={Copy} onClick={onDuplicateSelected}>
            Duplicate ({selectedCount})
          </Button>
        )}
        {selectedCount > 0 && onDeleteSelected && (
          <Button variant="danger" size="small" icon={Trash2} onClick={onDeleteSelected}>
            Delete ({selectedCount})
          </Button>
        )}
        <span className="profile-test-toolbar-count">
          {totalCount} test{totalCount !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
};

export default ProfileTestToolbar;
