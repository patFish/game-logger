import GameTimer from "@/components/GameTimer/GameTimer";

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: {};
}) {
  const { asdf } = searchParams;

  return (
    <div>
      <GameTimer />
    </div>
  );
}
