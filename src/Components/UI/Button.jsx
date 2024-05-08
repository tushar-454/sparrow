import PropTypes from 'prop-types';
const Button = ({ loading = false, children, ...rest }) => {
  return (
    <div>
      <button
        {...rest}
        className='inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-apple-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-apple-600 active:bg-apple-700 disabled:cursor-not-allowed disabled:bg-apple-200 disabled:text-apple-700'
      >
        {loading ? (
          <span className='flex items-center justify-center'>
            <svg
              className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='#2d682d'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='#2d682d'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            {children}
          </span>
        ) : (
          <>{children}</>
        )}
      </button>
    </div>
  );
};
Button.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
export default Button;
