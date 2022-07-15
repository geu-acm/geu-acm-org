import { Card, Center, Image, Text, Badge, Button, Group, useMantineTheme, Avatar } from '@mantine/core';

export default function Profilecard(props) {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 200, margin: 'auto' }} className="pcard">
      <Card shadow="xl" p="xl" style={{ width: "175px", minHeight: "303px" }}>
        <Center>
          <Card.Section>
            <Avatar radius={80} size={120} src={props.pic} />
          </Card.Section>
        </Center>

        <Group position="center" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text align='center' weight={500}>{props.name}</Text>
          {/* <br /> */}
          <Badge color="pink" variant="light">
            {props.pos}
          </Badge>
        </Group>

        {
          !props.in ?
            <>
              <icon class="fa-brands fa-instagram"></icon>
              <icon class="fa-brands fa-linkedin"></icon>
              <icon class="fa-brands fa-github"></icon>
            </>
            : <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>Contact</Button>
        }

      </Card>
    </div>
  );
}