import React from 'react';
import {Link} from 'react-router';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Target from './Target';
import Draggable from './Draggable';

class MiniProjectContent extends React.Component {

  constructor() {
  super()
  // this.state = {
  //   knightPosition: [1,7]
  // }
}
render() {

  return (
    <div className="miniProjectContent">
      <div className="dragAround">
        <Target backgroundColor={'orange'} width={'50%'}/>
        <Draggable backgroundColor={'purple'}/>
      </div>
      <div className="empty"/>
      <div className="dragToTarget">
        <Target backgroundColor={'orange'}/>
        <Target backgroundColor={'yellow'}/>
        <Target backgroundColor={'red'}/>
        <Draggable backgroundColor={'purple'}/>
      </div>
    </div>
  );
}
}

export default MiniProjectContent
// export default DragDropContext(HTML5Backend)(MiniProjectContent)
