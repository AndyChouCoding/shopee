
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
      className={` ${className}`}
    >
      {children}
    </button>
    </>
}

export default AccountBtns;