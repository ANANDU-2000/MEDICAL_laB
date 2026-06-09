import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Edit2, Trash2, Package, Copy } from 'lucide-react';
import { getProfiles, deleteProfile, deleteProfiles, duplicateProfile } from '../../features/shared/dataService';
import { useAuthStore } from '../../store';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import toast from 'react-hot-toast';
import './ProfileManager.css';

const ProfileManager = () => {
  const navigate = useNavigate();
  const { role } = useAuthStore();
  const isAdmin = role === 'admin';
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  const loadData = () => {
    setProfiles(getProfiles());
  };

  useEffect(() => {
    loadData();
    const onDataUpdate = (event) => {
      if (!event.detail?.type || event.detail.type === 'profiles' || event.detail.type === 'all') {
        loadData();
      }
    };
    window.addEventListener('healit-data-update', onDataUpdate);
    return () => window.removeEventListener('healit-data-update', onDataUpdate);
  }, []);

  const filteredProfiles = profiles.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const denyStaffDelete = () => {
    toast.error('Only admin can delete profiles. Contact admin.');
  };

  const handleDeleteProfile = async (profileId) => {
    if (!isAdmin) {
      denyStaffDelete();
      return;
    }
    if (!confirm('Are you sure you want to DELETE this profile permanently? This cannot be undone.')) return;

    try {
      const { deleted, synced, error } = await deleteProfile(profileId, role);
      if (!deleted) {
        toast.error(error || 'Profile not found');
        return;
      }
      toast.success(synced ? 'Profile deleted successfully' : 'Profile deleted locally (server sync failed)');
      loadData();
      setSelectedProfiles([]);
    } catch {
      toast.error('Failed to delete profile');
    }
  };

  const handleDeleteSelected = async () => {
    if (!isAdmin) {
      denyStaffDelete();
      return;
    }
    if (selectedProfiles.length === 0) {
      toast.error('No profiles selected');
      return;
    }

    if (!confirm(`Delete ${selectedProfiles.length} selected profile(s)? This cannot be undone.`)) return;

    try {
      const { deletedCount, synced, error } = await deleteProfiles(selectedProfiles, role);
      if (deletedCount === 0) {
        toast.error(error || 'No profiles were deleted');
        return;
      }
      toast.success(
        synced
          ? `${deletedCount} profile(s) deleted successfully`
          : `${deletedCount} profile(s) deleted locally (server sync failed)`
      );
      setSelectedProfiles([]);
      loadData();
    } catch {
      toast.error('Failed to delete profiles');
    }
  };

  const handleDuplicateProfile = async (profileId) => {
    try {
      const copy = await duplicateProfile(profileId);
      if (!copy) {
        toast.error('Could not duplicate profile');
        return;
      }
      toast.success('Profile duplicated');
      navigate(`/profiles/edit/${copy.profileId}`);
    } catch {
      toast.error('Failed to duplicate profile');
    }
  };

  const toggleSelectProfile = (profileId) => {
    if (!isAdmin) return;
    setSelectedProfiles(prev =>
      prev.includes(profileId)
        ? prev.filter(id => id !== profileId)
        : [...prev, profileId]
    );
  };

  const toggleSelectAll = () => {
    if (!isAdmin) return;
    if (selectedProfiles.length === filteredProfiles.length) {
      setSelectedProfiles([]);
    } else {
      setSelectedProfiles(filteredProfiles.map(p => p.profileId));
    }
  };

  return (
    <div className="profile-manager-page">
      <div className="page-header">
        <div>
          <h1>Profile Manager</h1>
          <p className="subtitle">Create and manage test profile packages</p>
        </div>
        <Button icon={Plus} onClick={() => navigate('/profiles/new')}>
          Add New Profile
        </Button>
      </div>

      <Card className="filters-card">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search profiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {isAdmin && (
          <div className="bulk-actions">
            {filteredProfiles.length > 0 && (
              <>
                <Button
                  variant="outline"
                  size="small"
                  onClick={toggleSelectAll}
                >
                  {selectedProfiles.length === filteredProfiles.length ? 'Deselect All' : 'Select All'}
                </Button>
                {selectedProfiles.length > 0 && (
                  <Button
                    variant="danger"
                    size="small"
                    icon={Trash2}
                    onClick={handleDeleteSelected}
                  >
                    Delete Selected ({selectedProfiles.length})
                  </Button>
                )}
              </>
            )}
          </div>
        )}
      </Card>

      <div className="profiles-grid">
        {filteredProfiles.map(profile => (
          <Card
            key={profile.profileId}
            className={`profile-card ${selectedProfiles.includes(profile.profileId) ? 'selected' : ''}`}
          >
            <div className="profile-card-header">
              {isAdmin && (
                <input
                  type="checkbox"
                  checked={selectedProfiles.includes(profile.profileId)}
                  onChange={() => toggleSelectProfile(profile.profileId)}
                  className="profile-checkbox"
                />
              )}
              <div className="profile-icon">
                <Package size={24} />
              </div>
              <div className="profile-info">
                <h3>{profile.name}</h3>
                {profile.description && <p className="profile-desc">{profile.description}</p>}
                {profile.createdByName && (
                  <p className="profile-creator">
                    Created by {profile.createdByName} ({profile.createdByRole || 'admin'})
                  </p>
                )}
              </div>
            </div>

            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-label">Tests</span>
                <span className="stat-value">{profile.tests?.length || profile.testIds?.length || 0}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Package Price</span>
                <span className="stat-value">₹{profile.packagePrice || 0}</span>
              </div>
            </div>

            <div className="profile-actions">
              <Button
                variant="outline"
                size="small"
                icon={Edit2}
                onClick={() => navigate(`/profiles/edit/${profile.profileId}`)}
              >
                Edit
              </Button>
              <Button
                variant="outline"
                size="small"
                icon={Copy}
                onClick={() => handleDuplicateProfile(profile.profileId)}
              >
                Duplicate
              </Button>
              {isAdmin && (
                <Button
                  variant="danger"
                  size="small"
                  icon={Trash2}
                  onClick={() => handleDeleteProfile(profile.profileId)}
                >
                  Delete
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfileManager;
