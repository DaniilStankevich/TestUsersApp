import React, { FC, useRef, useState } from "react"

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("")
  const [isDrag, setIsDrag] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
  }

  ////////////////////////////////////////////////////////////////
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG")
  }

  // onDragOver - когда наносим на блок
  const dragWidthPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  //onDragLeave - когда уходим с блока
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  //onDrop - когда отпускаем перемещенный блок над блоком с событием
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  return (
    <div>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="Управляемый"
      />
      <input
        ref={inputRef}
        type="text"
        placeholder="Неуправляемый"
      />

      <button onClick={clickHandler}>Кнопка</button>

      <div
        onDrag={dragHandler}
        draggable="true"
        style={{ width: 200, height: 200, background: "red" }}
      >
        {" "}
      </div>

      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWidthPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "red",
          marginTop: 15,
        }}
      >
        {" "}
      </div>
    </div>
  )
}

export default EventsExample
