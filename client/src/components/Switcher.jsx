export default function Switcher({ currentPage, setCurrentPage }) {
    return (
        <div className="switcher">
            <button
                className={currentPage === 'display' ? 'active' : ''}
                onClick={() => setCurrentPage('display')}
            >
                Display
            </button>
            <button
                className={currentPage === 'remote' ? 'active' : ''}
                onClick={() => setCurrentPage('remote')}
            >
                Remote
            </button>
        </div>
    );
}