type Props = {
  title: string;
};

const Heading = ({ title }: Props) => {
  return <h3 className="text-semibold">{title}</h3>;
};

export default Heading;
