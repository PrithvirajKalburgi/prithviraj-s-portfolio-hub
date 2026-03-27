const BackgroundOrbs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px] animate-float-slow" />
    <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] rounded-full bg-[hsl(190_80%_60%/0.04)] blur-[100px] animate-float-medium" />
    <div className="absolute top-[40%] left-[50%] w-[350px] h-[350px] rounded-full bg-[hsl(220_60%_50%/0.03)] blur-[130px] animate-float-fast" />
    <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-primary/[0.02] blur-[100px] animate-float-medium" style={{ animationDelay: '-5s' }} />
  </div>
);

export default BackgroundOrbs;
