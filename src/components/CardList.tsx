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
          width: 300,
          //   maxWidth: "80%",
          marginTop: 16,
        }}
        hoverable
      >
        <Meta avatar={icon} title={title} description={description} />
      </Card>
    </Link>
  );
};

export default CardList;
