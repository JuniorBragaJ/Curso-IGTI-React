export default function Header (props) {
    return <header>
    <div className="bg-blue-100 mx-auto p-4">
      <h1 className="text-center font-semibold text-xl">
        {props.children}
      </h1>
    </div>
  </header>
}