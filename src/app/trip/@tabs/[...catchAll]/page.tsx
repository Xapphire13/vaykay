interface TabNotFoundProps {
  params: { catchAll: string };
}

export default function TabNotFound({ params }: TabNotFoundProps) {
  return `Tab "${params.catchAll}" not found`;
}
