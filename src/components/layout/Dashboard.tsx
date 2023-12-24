import { Breadcrumb } from "antd";
type DashboardProps = {
  children: any;
  breadcrumb?: any;
  items?: any[];
};

export default function Dashboard(props: DashboardProps) {
  const { children, breadcrumb, items } = props;
  return (
    <div>
      {breadcrumb && <Breadcrumb items={items} className="ml-2 p-5" />}
      {children}
    </div>
  );
}
