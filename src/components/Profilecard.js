import { Card, Center, Image, Text, Badge, Button, Group, useMantineTheme, Avatar } from '@mantine/core';

export default function Profilecard() {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 200, margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Center>
        <Card.Section>
          <Avatar radius={80} size={180} src="https://geu.acm.org/core/Diksha.jpg" />
        </Card.Section>
        </Center>
        

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text align='center' weight={500}>Disksha Bisht</Text>
          <Badge color="pink" variant="light">
            Chair
          </Badge>
        </Group>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Contact
        </Button>
      </Card>
    </div>
  );
}