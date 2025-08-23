import 'country-flag-icons/react/3x2';
import { ES, GB } from 'country-flag-icons/react/3x2';
import './LanguageToggle.css';


function LanguageToggle({ onLanguageChange, language }) {
  return (
    <div className="language-toggle">
      <button
        onClick={() => onLanguageChange('es')}
        className={language === 'es' ? 'active' : ''}
        title="Español"
      >
        <ES className="flag-icon" />
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={language === 'en' ? 'active' : ''}
        title="English"
      >
        <GB className="flag-icon" />
      </button>
    </div>
  );
}

export default LanguageToggle;
