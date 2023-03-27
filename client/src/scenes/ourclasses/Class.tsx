import React from 'react'

type Props = {
    name: string;
    description?: string;
    image: string;
}

const Class = ({ name, description, image}: Props) => {
  return (
    <section>
        <div>
            {name}
            {description}
            {image}
        </div>
    </section>
  )
}

export default Class