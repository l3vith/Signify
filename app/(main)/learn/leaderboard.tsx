

const Leaderboard = () => {
  return (
    <div className="h-[149px] w-full border rounded-xl mt-10 flex flex-col p-5 text-white gap-5">
        <h2 className="text-2xl font-bold">Unlock Leaderboard</h2>
        <div className="flex gap-5 items-center justify-center">
            <img src={"/leaderboard.svg"} height={40} width={40} alt={"leaderboard"} />
            <p>Complete 10 more lessons to start competing</p>
        </div>
    </div>
  )
}

export default Leaderboard
