const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      {children}
    </div>
  );
};

export default Authlayout;
