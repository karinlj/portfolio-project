import "./_toggleMenuBtn.scss";

interface IProps {
  toggleMenu(): void;
  isMobileOpen: boolean;
}
const ToggleMenuBtn: React.FC<IProps> = ({
  toggleMenu,
  isMobileOpen,
}: IProps) => {
  return (
    <button
      className={`menu_btn ${isMobileOpen ? "menu_btn_clicked" : ""}`}
      aria-label="Mobile Menu"
      aria-expanded={isMobileOpen ? "true" : "false"}
      onClick={toggleMenu}
    >
      <div aria-hidden="true"></div>
    </button>
  );
};
export default ToggleMenuBtn;
