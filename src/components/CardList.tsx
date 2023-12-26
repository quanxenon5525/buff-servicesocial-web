import { useMediaQuery } from "@mui/material";
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
  const sm = useMediaQuery("(min-width: 750px)");
  const cardWidth = sm ? 300 : 200;

  return (
    <Link href={href}>
      <Card
        style={{
          width: cardWidth,
          height: 150,
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
