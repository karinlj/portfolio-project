import "./_toggleMenuBtn.scss";

interface IProps {
  toggleMenu(): void;
  mobileOpen: boolean;
}
const ToggleMenuBtn: React.FC<IProps> = ({
  toggleMenu,
  mobileOpen,
}: IProps) => {
  return (
    <button
      className={`menu_btn {mobileOpen ? "menu_btn_clicked" : "menu_btn"}`}
      aria-label="Mobile Menu"
      aria-expanded={mobileOpen ? "true" : "false"}
      onClick={toggleMenu}
    >
      <div aria-hidden="true"></div>
    </button>
  );
};
export default ToggleMenuBtn;
