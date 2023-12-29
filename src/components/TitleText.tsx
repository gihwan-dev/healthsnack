type TitleTextProps = {
  children: React.ReactNode;
  center?: boolean;
};

const TitleText: React.FC<TitleTextProps> = ({ children, center = true }) => {
  return (
    <h2
      className={`${
        center ? 'text-center' : 'text-left'
      } break-words text-4xl font-bold text-white sm:text-5xl`}
    >
      {children}
    </h2>
  );
};

export default TitleText;
