import React from 'react'

interface DescriptionProps {
  description: string;
}

export const DescriptionComp: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="container text-justify">
      <div className="row justify-content-justify">
        <div className="col-md-auto text-justify">
          <p className="fs-3">{description}</p>
        </div>
      </div></div>

  )
}
