import Icons from "../assets";

const getIconByName = (name: string) => {
  switch (name) {
    case "dashboard":
      return Icons.DashboardIcon;

    case "orders":
      return Icons.OrdersIcon;

    case "tables":
      return Icons.TablesIcon;

    case "reservation":
      return Icons.ReservationIcon;

    case "waiting":
      return Icons.WaitingIcon;

    case "cashier":
      return Icons.CashierIcon;

    case "refund":
      return Icons.RefundIcon;

    case "kitchen":
      return Icons.KitchenIcon;

    case "reports":
      return Icons.ReportsIcon;

    case "comments":
      return Icons.CommentsIcon;

    case "feedback":
      return Icons.FeedBackIcon;

    case "copouns":
      return Icons.CopounsIcon;

    case "menu":
      return Icons.MenuIcon;

    case "employees":
      return Icons.EmployeesIcon;

    case "qrcode":
      return Icons.QRCodeIcon;

    case "settings":
      return Icons.SettingsIcon;

    case "signout":
      return Icons.SignOutIcon;

    default:
      return Icons.DashboardIcon;
  }
};

interface IconProps {
  name: string;
  color: string;
}

const Icon = ({ name, color }: IconProps) => {
  const SelectedIcon = getIconByName(name);
  return <SelectedIcon stroke={color}/>;
};

export default Icon;
