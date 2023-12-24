import { Card } from "antd";
import Link from "next/link";
import { FC } from "react";

interface CustomCardProps {
  title: string;
  description: string;
  href: string;
  icon?: any;
}

export const CardList: FC<CustomCardProps> = ({
  title,
  description,
  href,
  icon,
}) => {
  const { Meta } = Card;

  return (
    <Link href={href}>
      <Card
        style={{
          width: 320,
          height: 125,
          marginTop: 16,
          backgroundColor: "#00a680",
        }}
        hoverable
      >
        <Meta avatar={icon} title={title} description={description} />
      </Card>
    </Link>
  );
};

export default CardList;
