'use client'

import { useBoardStore } from '@/store/BoardStore'
import React, { useEffect } from 'react'
import {DragDropContext, Droppable} from "react-beautiful-dnd"

function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);

  useEffect(() => {
    getBoard()
  }, [])
  
  return (
    <h1>Testtsgdv</h1>
    // <DragDropContext>
    //   <Droppable droppableId='board' direction='horizontal' type='column'>
    //     { (provided) => <div>{/*render all the columns*/}</div>
    //     }
    //   </Droppable>
    // </DragDropContext>
  )
}

export default Board