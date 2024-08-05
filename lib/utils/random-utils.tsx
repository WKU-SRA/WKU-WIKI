import * as Icons from '@tabler/icons-react'

/**
 * @deprecated not used, cause I did not read the tabler api,
 *
 */
export function getRandomIcons(className: string) {
  const iconKeys = Object.keys(Icons)
  const FallBack = Icons.IconAbc

  const randomIndex = Math.floor(Math.random() * iconKeys.length)
  const randomIconKey = iconKeys[randomIndex]

  const RandomIcon = Icons[randomIconKey]

  if (typeof RandomIcon === 'function') {
    return <RandomIcon className={className} />
  } else {
    console.error('Invalid icon component:', RandomIcon)
    return <FallBack className={className} />
  }
}

export default function getRandom<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
