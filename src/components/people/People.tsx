export type Person = {
  name: string
  hairColor: string
  eyeColor: string
}

type PersonProps = Person

export function Person({ name, hairColor, eyeColor }: PersonProps) {
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  )
}
