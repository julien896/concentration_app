export const Info = ({ children } : { children: React.ReactNode }) => (
  <div className="info">
      {children}
  </div>
)

export const InfoElement = ({ 
  title, 
  value
} : { 
  title: string;
  value: number;
}) => (
  <div className="info__element">
      <h3>
        {title}: {value}
      </h3>
  </div>
)
