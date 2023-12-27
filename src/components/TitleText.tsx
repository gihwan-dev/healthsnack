const TitleText: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <h2 className="text-center text-5xl font-bold text-white">{children}</h2>
  );
};

export default TitleText;
