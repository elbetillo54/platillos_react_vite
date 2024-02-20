
const Error = ({mensaje}) => {
  return (
    <div className="w-full bg-red-700 py-3 mb-3 rounded-md ">
            <p className="text-center font-bold text-x text-white text-xl transition">{mensaje.toUpperCase()}</p>
    </div>
  )
}

export default Error
