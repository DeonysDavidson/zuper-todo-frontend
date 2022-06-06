import { Navbar } from "../common";

const TodoLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default TodoLayout;
