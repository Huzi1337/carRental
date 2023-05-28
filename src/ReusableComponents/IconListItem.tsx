import "./IconListItem.scss";

interface Props {
  contentClass?: string;
  iconClass: "icon__globe" | "icon__tripleDots" | "icon__calendar";
  children: React.ReactNode;
}

const IconListItem = ({ iconClass, children, contentClass }: Props) => {
  return (
    <div className="container">
      <div className={`icon ${iconClass}`} />
      <p className={`content ${contentClass}`}>{children}</p>
    </div>
  );
};

export default IconListItem;
