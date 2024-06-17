
interface AccountBtnsProps {
    onClick:()=> void;
    children:React.ReactNode;
    className?:string;
    type?: 'button' | 'submit' | 'reset';
}

const AccountBtns:React.FC<AccountBtnsProps> = ({ onClick, children, className = '', type = 'button' }) => {
    return<>
 <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
    </>
}

export default AccountBtns;