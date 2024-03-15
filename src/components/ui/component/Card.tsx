import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../card'

interface CardComponentProps {
    title: string,
    content: string
}

const CardComponent= (props: CardComponentProps) => {
  return (
    <Card className="w-96 h-48 md:h-64 md:w-56 lg:h-64 lg:w-64 mt-5 border">
    <CardHeader>
        <CardTitle>{props.title}</CardTitle>
    </CardHeader>
    <CardContent>
        <p>{props.content}</p>
    </CardContent>
    </Card>
  )
}

export default CardComponent