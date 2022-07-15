import { Card, Image, Text } from '@mantine/core';

export default function Eventcard(props) {
  return (
    <Card
      shadow="sm"
      p="xl"
      component="a"
      // href=""
      target="_blank"
    >
      <Card.Section>
        <Image src={props.img} alt="No way!" />
      </Card.Section>

      <Text weight={500} size="lg">
        {props.name}
      </Text>

      <Text size="sm">
        {props.desc}
      </Text>
    </Card>
  );
}