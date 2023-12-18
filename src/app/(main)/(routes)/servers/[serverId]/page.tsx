import { db } from '@/lib/db'

type ServerIdPageProps = {
  params: {
    serverId: string
  }
}

export default async function ServerIdPage({ params }: ServerIdPageProps) {
  const server = await db.server.findFirst({
    where: {
      id: params.serverId,
    },
  })

  return <div>{server?.name}</div>
}
