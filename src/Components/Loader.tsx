export const Loader = () => {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <svg
          version="1.1"
          id="loader-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="100"
          height="100"
          style={{ transformOrigin: 'center', animation: 'spin 1.5s linear infinite' }}
        >
          <circle
            fill="none"
            stroke="#3498db"
            strokeWidth="4"
            cx="25"
            cy="25"
            r="20"
            strokeDasharray="125, 150"
            strokeDashoffset="0"
            strokeLinecap="round"
            style={{ animation: 'dash 1.5s ease-in-out infinite' }}
          />
        </svg>
  
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
  
          @keyframes dash {
            0% {
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dashoffset: 75;
              transform: rotate(45deg);
            }
            100% {
              stroke-dashoffset: 0;
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  };
  